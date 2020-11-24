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
                       MongoTemplate mongoTemplate){
        this.productMongoDao = productMongoDao;
        this.openFoodFactsApi = openFoodFactsApi;
        this.mongoTemplate = mongoTemplate;
    }




    public List<Product> searchProductsByNameService(String productName) throws FileNotFoundException, UnirestException {
            return openFoodFactsApi.searchProductByName(productName);
        }
}




