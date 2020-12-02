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

    public List<Product> searchProductsByNameService(String productName) throws  UnirestException {
        System.out.println(openFoodFactsApi.searchProductByName(productName));
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
                    .allergens( addAllergens(addMealDto) )
                    .hasSideEffect(false)
                    .sideEffects(emptyListOfSideEffects)
                    .ratingOfSideEffects(0)
                .build());
    }


/* Helper Functions */
    public List<Allergen> addAllergens(AddMealDto addMealDto){

        List<Allergen> allergens = new ArrayList<>();
        addMealDto.getAddMealListOfProducts().forEach(product -> {
            for (int i = 0; i < product.getIngredients_text_de().size(); i++) {
                List<String> newList = Arrays.asList(product.getIngredients_text_de().get(i));
                for (String searchWord: newList) {
                    allergens.addAll(allergenMongo.findAllergenByName("^"+searchWord));
                }
            }
        });
        return allergens;
    }
}



