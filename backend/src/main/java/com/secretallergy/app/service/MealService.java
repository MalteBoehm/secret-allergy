package com.secretallergy.app.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.api.OpenFoodFactsApi;
import com.secretallergy.app.dao.AllergenMongoDao;
import com.secretallergy.app.dao.MealMongoDao;
import com.secretallergy.app.dao.ProductMongoDao;
import com.secretallergy.app.dto.AddMealDto;
import com.secretallergy.app.dto.AddSideEffectsDto;
import com.secretallergy.app.model.*;
import org.springframework.data.mongodb.core.MongoOperations;
import com.secretallergy.app.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;


import java.lang.reflect.Array;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
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

        List<SideEffects> emptyListOfSideEffects = new ArrayList<>();

        return mealMongo.save(
                Meal.builder()
                        .mealOfUserId(addMealDto.getUserId())
                        .mealId(idUtils.generateId())
                        .date(date.format(currentDate))
                        .mealDaytime(addMealDto.getMealParam())
                        .products(addMealDto.getAddMealListOfProducts())
                        .allergens(addAllergens(addMealDto).stream()
                                .distinct()
                                .collect(Collectors.toList()))
                        .hasSideEffect(false)
                        .sideEffects(emptyListOfSideEffects)
                        .build());
    }

    public List<Meal> getTodaysMealsOfUser(String userId) {
        LocalDate date = LocalDate.now();
        DateTimeFormatter currentDate = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        return mealMongo.findMealByDateIsAndMealOfUserId(date.format(currentDate), userId);
    }


    /* Helper Functions */
    public List<Allergen> addAllergens(AddMealDto addMealDto) {
        List<Allergen> allergens = new ArrayList<>();

        addMealDto.getAddMealListOfProducts().forEach(product -> {
            for (int i = 0; i < product.getIngredients_text_de().size(); i++) {
                List<String> ingredientsOfProduct = filterIngredients(List.of(product.getIngredients_text_de().get(i)));
                for (String searchWord : ingredientsOfProduct) {
                    Optional<List<Allergen>> searchAllergensInDb = Optional.of(allergenMongo.findAllergensByNamesMatchesRegex(searchWord.trim()));

                    for (int j = 0; j < searchAllergensInDb.get().size(); j++) {
                        if (searchAllergensInDb.get().get(j).getNames().get(0).equals("")) {
                            return;
                        } else {
                            System.out.println(allergens.add(searchAllergensInDb.get().get(j)));
                        }
                    }
                    ;
                }
            }
        });
        return allergens.stream().distinct().collect(Collectors.toList());
    }


    private List<String> filterIngredients(List<String> ingredientsOfProduct) {
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
                "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "UKäseMilch","Wasser", "Gesamtfettgehalt", "davon", "und", "aufgeschlossenes", "     ","Säuerungsmittel"));

        List<String> checkForDuplicatesList = new ArrayList<>();
        for (String ingredient : ingredientsOfProduct) {
            String cleanedIngredient = ingredient.replaceAll("^[\s]w*|(\s{2,})w*|$([\s])w*","");
            for (String filterWord : filterWords) {
                if (!cleanedIngredient.equalsIgnoreCase(filterWord)) {
                    if (cleanedIngredient.length() > 3) {
                        if (!checkForDuplicatesList.contains(cleanedIngredient)) {
                            System.out.println(checkForDuplicatesList.add(cleanedIngredient.trim()));
                        }
                    }
                }
            }
        }
        List<String> uniqueList = new ArrayList<>(checkForDuplicatesList);
        List<String> cleanList = new ArrayList<>();
        for (String item : uniqueList) {
            if (!item.isEmpty()) {
                cleanList.add(item);
            }
        }
        return cleanList;
    }
}
