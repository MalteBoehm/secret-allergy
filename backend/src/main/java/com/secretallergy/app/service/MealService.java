package com.secretallergy.app.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.api.OpenFoodFactsApi;
import com.secretallergy.app.dao.ProductMongoDao;
import com.secretallergy.app.model.Product;

import org.json.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;


import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;



@Service
public class MealService {
    private final ProductMongoDao productMongoDao;
    List<Product> emptyList = new ArrayList<>();
    private final OpenFoodFactsApi openFoodFactsApi;
    private final MongoTemplate mongoTemplate;



    @Autowired
    public MealService(ProductMongoDao productMongoDao,
                       OpenFoodFactsApi openFoodFactsApi,
                       MongoTemplate mongoTemplate) {
        this.productMongoDao = productMongoDao;
this.openFoodFactsApi = openFoodFactsApi;
        this.mongoTemplate = mongoTemplate;
    }




    public List<Product> searchProductsByNameService(String productName) throws FileNotFoundException, UnirestException {
        if ( productName.length() >= 3 )
        {
            return openFoodFactsApi.searchProductByName(productName);
        }
        else {
            return emptyList;
        }
    }


//    public List<String> checkIngredientsForAllergens(List<String> ingredients_text_de) throws FileNotFoundException {
//        JSONParser parser = new JSONParser();
//        try {
//            Object obj = parser.parse(new FileReader("C:/SecretAllergy/backend/data/allergens.json"));
//            JSONArray jsonObject = (JSONArray) obj;
//            List<String> allergens = new ArrayList<>();
//
//            for (int i = 0; i < jsonObject.length(); i++) {
//                for (String ingredient: ingredients_text_de) {
//                    if(jsonObject.getJSONObject(i).getString("name").contains(ingredient.toUpperCase())){
//                        allergens.add(ingredient);
//                    }
//                }
//            }
//            return allergens;
//        }catch(Exception e) {
//            e.printStackTrace();
//        }
//    return null;
//}
}

