package com.secretallergy.app.controller;


import com.mashape.unirest.http.exceptions.UnirestException;

import com.secretallergy.app.model.Product;
import com.secretallergy.app.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;


import java.io.FileNotFoundException;
import java.util.List;

@RestController
@RequestMapping("api/product")
public class MealController {
    private final MealService mealService;


    @Autowired
    public MealController(MealService mealService){
        this.mealService = mealService;
    }


    @CrossOrigin
    @GetMapping()
    public List<Product> getProductsByName(@RequestParam String products) throws FileNotFoundException, UnirestException {
            return mealService.searchProductsByNameService(products);
        }
}

