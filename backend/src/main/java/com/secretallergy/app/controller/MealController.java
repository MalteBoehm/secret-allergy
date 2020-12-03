package com.secretallergy.app.controller;


import com.mashape.unirest.http.exceptions.UnirestException;

import com.secretallergy.app.dto.AddMealDto;
import com.secretallergy.app.model.Meal;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;


import java.io.FileNotFoundException;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping(value = "/api/meal")
public class MealController {
    private final MealService mealService;


    @Autowired
    public MealController(MealService mealService){
        this.mealService = mealService;
    }


    @CrossOrigin
    @GetMapping("/livesearch")
    public List<Product> getProductsByName(@RequestParam String products) throws UnirestException {
            return mealService.searchProductsByNameService(products);
    }


    @CrossOrigin
    @PostMapping("/new")
    public Meal addMealToUser(@RequestBody AddMealDto addMeal){
        return mealService.addMealToUser(addMeal);
    }
}

