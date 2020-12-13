package com.secretallergy.app.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.api.OpenFoodFactsApi;
import com.secretallergy.app.dao.AllergenMongoDao;
import com.secretallergy.app.dao.MealMongoDao;
import com.secretallergy.app.dto.AddMealDto;
import com.secretallergy.app.model.*;
import com.secretallergy.app.utils.IdUtils;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;


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

        val date = LocalDate.now();
        val currentDate = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        List<SideEffects> emptyListOfSideEffects = new ArrayList<>();

        return mealMongo.save(
                Meal.builder()
                        .mealOfUserId(addMealDto.getUserId())
                        .mealId(idUtils.generateId())
                        .date(date.format(currentDate))
                        .mealDaytime(addMealDto.getMealParam())
                        .products(addProducts(addMealDto))
                        .allergens(addAllergens(addMealDto).stream()
                                .distinct()
                                .collect(Collectors.toList()))
                        .hasSideEffect(false)
                        .sideEffects(emptyListOfSideEffects)
                        .build());
    }

    public List<Meal> getTodaysMealsOfUser(String userId) {
        val date = LocalDate.now();
        val currentDate = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        return mealMongo.findMealByDateIsAndMealOfUserId(date.format(currentDate), userId);
    }


    /* Helper Functions */
    public List<Product> addProducts(AddMealDto addMealDto) {

        List<Product> cleanListOfProducts = new ArrayList<>();

        addMealDto.getAddMealListOfProducts().forEach(product -> {
                    List<String> filteredIngredientsOfSingleProduct = new ArrayList<>();

                    // Checks every Ingredient of Product and filters it, than adds it to rebuild the product
                    for (int i = 0; i < product.getIngredients_text_de().size(); i++) {
                        val ingredientsOfProduct = filterIngredients(List.of(product.getIngredients_text_de().get(i)));
                        for (String item : ingredientsOfProduct) {
                            if (!item.isEmpty()) {
                                filteredIngredientsOfSingleProduct.add(item);
                            }
                        }
                    }
                    // inserts the filtered ingredients list to the single product
                    val newProduct = Product.builder()
                            ._id(product.get_id())
                            .product_name(product.getProduct_name())
                            .brands(product.getBrands())
                            .image_front_thumb_url(product.getImage_front_thumb_url())
                            .ingredients_text_de(filteredIngredientsOfSingleProduct).build();
                    cleanListOfProducts.add(newProduct);
                }
        );
        return cleanListOfProducts.stream().distinct().collect(Collectors.toList());
    }


    public List<Allergen> addAllergens(AddMealDto addMealDto) {
        List<Allergen> allergens = new ArrayList<>();

        addMealDto.getAddMealListOfProducts().forEach(product -> {
            for (int i = 0; i < product.getIngredients_text_de().size(); i++) {
                val ingredientsOfProduct = filterIngredients(List.of(product.getIngredients_text_de().get(i)));
                for (String searchWord : ingredientsOfProduct) {
                    val searchAllergensInDb = Optional.of(allergenMongo.findAllergensByNamesMatchesRegex(searchWord.trim()));

                    for (int j = 0; j < searchAllergensInDb.get().size(); j++) {
                        if (searchAllergensInDb.get().get(j).getNames().get(0).equals("")) {
                            return;
                        } else {
                            allergens.add(searchAllergensInDb.get().get(j));
                        }
                    }
                }
            }
        });
        return allergens.stream().distinct().collect(Collectors.toList());
    }


    private List<String> filterIngredients(List<String> ingredientsOfProduct) {
        val filterWords = new ArrayList<>(List.of(
                "Teig", "Konservierungsstoff", "Konservierungsstoffe",
                "Stabilisator", "Stabilisatoren", "Antioxidationsmittel", "Antioxidationsmitteln",
                "Gesamtmilchbestandteile", "im", "von", " Produkt", "Überzugsmittel",
                "Gesamtkakaobestandteile", "aufgeschlossenes", "Gesamtfettanteil",
                "davon", "Pflanzenfett", "Käse", "fettarmes", "Pflanzenfett", "Fisch",
                "aufgeschlossenes", "Pflanzeneiweiß", "eingelegte", "raffiniertes", "frittierte", "halbierte", "gehobelter",
                "UKäseMilch", "Wasser", "Gesamtfettgehalt", "davon", "und", "aufgeschlossenes", "     ", "Kräuter",
                "Säuerungsmittel", "enthalten", "Spuren", "Kann", "gegrillte", "Gewürze", "gU", "Krebstieren und Soja enthalten",
                "", ":", ";", ".", "_", ")", "(", "%",
                "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"));

        List<String> checkForDuplicatesList = new ArrayList<>();
// Check IngredientsOfProductsList for UppercaseUppercase, but a , and split it to new list /todo
        val upperCaseWordsSplitIngredientsList = splitUpperCaseWordsToListItems(ingredientsOfProduct);

        for (val ingredient : upperCaseWordsSplitIngredientsList) {
            val singleCleanedIngredient = ingredient.replaceAll("^[\s]w*|(,\s)w*|(\s{2,})w*|$([\s])w*", "");

            // Compares every ingredient to each filter word
            for (val filterWord : filterWords) {
                if (!singleCleanedIngredient.equalsIgnoreCase(filterWord)) {
                    if (singleCleanedIngredient.length() > 3) {
                        if (!checkForDuplicatesList.contains(singleCleanedIngredient)) {
                            var ingredientWithNoFilterWord = singleCleanedIngredient.replaceAll(filterWord, "");
                            checkForDuplicatesList.add(ingredientWithNoFilterWord);
                        }
                    }
                }
            }
        }
        val uniqueList = new ArrayList<>(checkForDuplicatesList);
        List<String> cleanList = new ArrayList<>();
        for (String item : uniqueList) {
            if (!item.isEmpty() && !filterWords.contains(item)) {
                cleanList.add(item);
            }
        }
        return cleanList;
    }



    private List<String> splitUpperCaseWordsToListItems(List<String> listOfIngredients) {
        List<String> ingredientListWithSplitUpperCase = new ArrayList<>();
        for (var word : listOfIngredients) {
            for (int i = 1; i < word.length(); i++) {
                List<String> splitUpperCaseWordArray = Arrays.asList(word.replaceAll("([a-z])([A-Z])", "$1,$2").split(","));
                ingredientListWithSplitUpperCase.addAll(splitUpperCaseWordArray);
            }
        }
        return ingredientListWithSplitUpperCase;
    }
}
