package com.secretallergy.app.controller;


import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.dto.SearchByProductNameDto;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/meals")
public class MealController {
    private final MealService mealService;

    private List<Product> listIsEmpty = new ArrayList<>(List.of(new Product("x","Kein Produkt gefunden", "keineURL")));

    @Autowired
    public MealController(MealService mealService){
        this.mealService = mealService;
    }


    @RequestMapping
    public List<Product> searchProductsByName(@RequestParam SearchByProductNameDto productName) throws UnirestException {
        if(productName.toString().length() >=3) {
            return mealService.searchProductsByNameService(productName);
        } else {
            return listIsEmpty;
        }
    }




}
