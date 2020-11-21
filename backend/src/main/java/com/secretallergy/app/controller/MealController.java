package com.secretallergy.app.controller;


import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.dto.SearchByProductNameDto;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/meals")
public class MealController {
    private final MealService mealService;


    @Autowired
    public MealController(MealService mealService){
        this.mealService = mealService;
    }


    public List<Product> searchProductsByName(@RequestParam Optional<SearchByProductNameDto> productName) throws UnirestException {
        if(productName.get().toString().length() >=3) return mealService.searchProductsByNameService(productName.get());
        // Todo Antwort
    }




}
