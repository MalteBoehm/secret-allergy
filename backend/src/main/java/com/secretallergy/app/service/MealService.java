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
import java.util.Optional;


@Service
public class MealService {
    private final ProductMongoDao productMongoDao;
    private final AllergenMongoDao allergenMongo;
    private final MealMongoDao mealMongo;
    private final OpenFoodFactsApi openFoodFactsApi;
    private final MongoTemplate mongoTemplate;
    private final IdUtils idUtils;


    @Autowired
    public MealService(ProductMongoDao productMongoDao, AllergenMongoDao allergenMongo, MealMongoDao mealMongo, OpenFoodFactsApi openFoodFactsApi, MongoTemplate mongoTemplate, IdUtils idUtils) {
        this.productMongoDao = productMongoDao;
        this.allergenMongo = allergenMongo;
        this.mealMongo = mealMongo;
        this.openFoodFactsApi = openFoodFactsApi;
        this.mongoTemplate = mongoTemplate;
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
                String[] shit = product.getIngredients_text_de().get(i).split(" ");
                List<String> theNewShit = new ArrayList<>();
                // Andersherum im string allergene suchen und nicht in den allergenen den strings
                for (String s: theNewShit) {
                    allergenMongo.findAll().forEach(allergen -> {
                        Arrays.stream(allergen.getNames().toArray()).map(el -> {
                                    if(s.toLowerCase().contains(el.toString().toLowerCase())){
                                        return allergens.add((Allergen) el);
                                    }else {
                                        return null;
                                    }
                        }
                                );

                        }
                    );
                    }
                }
        });

        System.out.println(allergens +"");
        return allergens;

    }
}



