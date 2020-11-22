package com.secretallergy.app.controller;


import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.dto.SearchByProductNameDto;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/meals")
public class MealController {
    private final MealService mealService;


    @Autowired
    public MealController(MealService mealService){
        this.mealService = mealService;
    }


    @GetMapping({"productName"})
    public List<Product> searchProductsByName(@RequestParam SearchByProductNameDto productName) throws UnirestException {
            return mealService.searchProductsByNameService(productName);
        }

}
