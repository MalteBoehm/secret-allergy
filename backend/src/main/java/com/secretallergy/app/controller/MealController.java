package com.secretallergy.app.controller;


import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.dto.SearchByProductNameDto;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("product")
public class MealController {
    private final MealService mealService;


    @Autowired
    public MealController(MealService mealService){
        this.mealService = mealService;
    }



    @GetMapping("{products}")
    public List<Product> searchProductsByName(@PathVariable String products) throws UnirestException, FileNotFoundException {
            return mealService.searchProductsByNameService(products);
        }

}

