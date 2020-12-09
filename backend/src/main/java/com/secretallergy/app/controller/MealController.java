package com.secretallergy.app.controller;


import com.mashape.unirest.http.exceptions.UnirestException;

import com.secretallergy.app.dto.AddMealDto;
import com.secretallergy.app.model.Meal;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/meal")
public class MealController {
    private final MealService mealService;


    @Autowired
    public MealController(MealService mealService) {
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


    @CrossOrigin
    @GetMapping("/getall")
    public List<Meal> getTodaysMealsOfUser(@RequestParam Optional<String> user){
        if(user.isEmpty()){
            return List.of();
        }
        return mealService.getTodaysMealsOfUser(user.get());
    }
}
