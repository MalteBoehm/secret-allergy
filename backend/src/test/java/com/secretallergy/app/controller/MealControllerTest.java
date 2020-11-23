package com.secretallergy.app.controller;

import com.mashape.unirest.http.exceptions.UnirestException;
import org.junit.jupiter.api.Test;

import java.io.FileNotFoundException;

import static org.junit.jupiter.api.Assertions.*;

class MealControllerTest {


    MealController mealController;
    @Test
    void searchProductsByName() throws FileNotFoundException, UnirestException {
        String suchwort = "Kinder Riegel";


        System.out.println(mealController.getProductsByName(suchwort).size());
    }
}
