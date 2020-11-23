package com.secretallergy.app.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.model.Product;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

class MealServiceTest {

    private final MealService mealService;

    MealServiceTest(MealService mealService) {
        this.mealService = mealService;
    }

    private final List<String> testIngredients_text_de = new ArrayList<>(List.of(
            "Eidotter", "Eier", "Milch", "ABSADAS", "Butter"
    ));


    @Test
    @DisplayName("Should Return List of Product if the name has 3 or more chars and it found")
    void searchProductsByNameServiceShouldReturnList() throws UnirestException, FileNotFoundException {

        // GIVEN
        String expectedTrue = "Kinder Riegel";

        // WHEN
        List<Product> trueResult = mealService.searchProductsByNameService(expectedTrue);





    }
    @Test
    @DisplayName("Should Return empty List, because it has not enough chars")
    void searchProductsByNameServiceShouldReturnEmptyList() throws UnirestException, FileNotFoundException {
        // GIVEN
        String expectedFalse = "Ki";
        // WHEN
        List<Product> falseResult = mealService.searchProductsByNameService(expectedFalse);
        // THEN
        assertThat( falseResult, is(falseResult.isEmpty() ));


    }

    @Test
    @DisplayName("Should Return a List when a List of String with ingredients is passed")
    void checkIngredientsForAllergens() throws FileNotFoundException {

//        //given
//        List<String> ingredients = new ArrayList<>(List.of(
//                "Milch", "Ei"
//        ));
//        // WHEN
//        List<String> abc = mealService.checkIngredientsForAllergens(ingredients);


    }
}
