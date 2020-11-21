package com.secretallergy.app.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.api.OpenFoodFactsApi;
import com.secretallergy.app.dto.SearchByProductNameDto;
import com.secretallergy.app.model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MealService {
    private OpenFoodFactsApi openFoodFactsApi;


    public List<Product> searchProductsByNameService(SearchByProductNameDto productName) throws UnirestException {
        return openFoodFactsApi.searchProductByName(productName);
    }
}
