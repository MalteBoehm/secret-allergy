package com.secretallergy.app.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.api.OpenFoodFactsApi;
import com.secretallergy.app.dao.AllergenMongoDao;
import com.secretallergy.app.dao.MealMongoDao;
import com.secretallergy.app.dao.ProductMongoDao;
import com.secretallergy.app.dto.AddMealDto;
import com.secretallergy.app.model.Allergen;
import com.secretallergy.app.model.Meal;
import com.secretallergy.app.model.Product;

import com.secretallergy.app.model.SideEffect;
import com.secretallergy.app.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Service
public class MealService {
    private final AllergenMongoDao allergenMongo;
    private final MealMongoDao mealMongo;
    private final OpenFoodFactsApi openFoodFactsApi;
    private final IdUtils idUtils;


    @Autowired
    public MealService(AllergenMongoDao allergenMongo, MealMongoDao mealMongo, OpenFoodFactsApi openFoodFactsApi, IdUtils idUtils) {
        this.allergenMongo = allergenMongo;
        this.mealMongo = mealMongo;
        this.openFoodFactsApi = openFoodFactsApi;
        this.idUtils = idUtils;
    }


    public List<Product> searchProductsByNameService(String productName) throws UnirestException {
        return openFoodFactsApi.searchProductByName(productName);
    }


    public Meal addMealToUser(AddMealDto addMealDto) {
        LocalDate date = LocalDate.now();
        DateTimeFormatter currentDate = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        List<SideEffect> emptyListOfSideEffects = new ArrayList<>();

        return mealMongo.save(
                Meal.builder()
                        .mealOfUserId(addMealDto.getUserId())
                        .mealId(idUtils.generateId())
                        .date(date.format(currentDate))
                        .mealDaytime(addMealDto.getMealParam())
                        .products(addMealDto.getAddMealListOfProducts())
                        .allergens(addAllergens(addMealDto))
                        .hasSideEffect(false)
                        .sideEffects(emptyListOfSideEffects)
                        .ratingOfSideEffects(0)
                        .build());
    }

    public List<Meal> getTodayMealsOfUser(String user) {
        LocalDate date = LocalDate.now();
        DateTimeFormatter currentDate = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        return mealMongo.findMealByDateIsAndMealOfUserId(date.format(currentDate), user);
    }


    /* Helper Functions */
    public List<Allergen> addAllergens(AddMealDto addMealDto) {
        List<Allergen> allergens = new ArrayList<>();

        addMealDto.getAddMealListOfProducts().forEach(product -> {
            for (int i = 0; i < product.getIngredients_text_de().size(); i++) {


                List<String> ingredientsOfProduct = filterIngredients(List.of(product.getIngredients_text_de().get(i)));
                for (String searchWord : ingredientsOfProduct) {
                    allergens.addAll(allergenMongo.findAllergensByNames(searchWord));
                }
            }
        });
        return allergens;
    }


    private List<String> filterIngredients(List<String> ingredientsOfProduct) {
        List<String> listOfFilteredIngredients = new ArrayList<>();
        ArrayList<String> filterWords = new ArrayList<>(List.of(
                "Teig",
                "Konservierungsstoff",
                "Stabilisator",
                "Antioxidationsmittel",
                "Gesamtmilchbestandteile",
                " im ",
                " Produkt",
                "Überzugsmittel",
                "Gesamtkakaobestandteile",
                "aufgeschlossenes",
                "Gesamtfettanteil",
                "davon",
                "Pflanzenfett",
                "Käse",
                "fettarmes",
                "Pflanzenfett",
                "aufgeschlossenes",
                "Pflanzeneiweiß",
                "eingelegte",
                "raffiniertes",
                "frittierte",
                "",
                ":",
                ";",
                ".",
                "_",
                "  ",
                ")",
                "(",
                "%",
                "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Wasser", "Gesamtfettgehalt", "davon", "und","aufgeschlossenes"));

        for (String ingredient : ingredientsOfProduct) {
            System.out.println(ingredientsOfProduct +"");
            for (String filterWord : filterWords) {
                if (!ingredient.strip().equalsIgnoreCase(filterWord)) {
                    listOfFilteredIngredients.add(ingredient);
                }
            }
        }
        return listOfFilteredIngredients.stream().distinct().collect(Collectors.toList());
    }
}

