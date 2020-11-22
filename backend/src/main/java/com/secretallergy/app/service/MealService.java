package com.secretallergy.app.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.api.OpenFoodFactsApi;
import com.secretallergy.app.dto.SearchByProductNameDto;
import com.secretallergy.app.model.Product;

import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.json.simple.JSONObject;


@Service
public class MealService {

    private OpenFoodFactsApi openFoodFactsApi;

    JSONParser parser = new JSONParser();
    protected Object allergenFile = parser.parse( new FileReader("C:/SecretAllergy/backend/data/allergens.json"));
    JSONObject allergenFileObject = (JSONObject) allergenFile;

    List<Product> emptyList = new ArrayList<>();

    public MealService() throws IOException, ParseException {
    }


    public List<Product> searchProductsByNameService(SearchByProductNameDto productName) throws UnirestException {
        if ( productName.toString().length() >= 3 )
        {
            return openFoodFactsApi.searchProductByName(productName);
        }
        else if ( productName.toString().length() <3 )
        {
            return emptyList;
        }
        return null;
    }


    public List<String> checkIngredientsForAllergens(List<String> ingredients_text_de) {
        List<String> allergens = new ArrayList<>();
        for (String ingredient: ingredients_text_de) {
            if(allergenFileObject.containsValue(ingredient)){
                allergens.add(ingredient);
            }
        }
        return allergens;
    }
}

