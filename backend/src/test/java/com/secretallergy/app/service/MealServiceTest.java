package com.secretallergy.app.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.api.OpenFoodFactsApi;
import com.secretallergy.app.dao.AllergenMongoDao;
import com.secretallergy.app.dao.MealMongoDao;
import com.secretallergy.app.dto.AddMealDto;
import com.secretallergy.app.model.Allergen;
import com.secretallergy.app.model.Meal;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.utils.IdUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;

import static org.mockito.Mockito.*;
import java.io.FileNotFoundException;
import java.util.List;

class MealServiceTest {

    private final AllergenMongoDao allergenMongo = mock(AllergenMongoDao.class);
    private final MealMongoDao mealMongo = mock(MealMongoDao.class);
    private final OpenFoodFactsApi openFoodFactsApi = mock(OpenFoodFactsApi.class);
    private final IdUtils idUtils = mock(IdUtils.class);
    private final MealService mealService = new MealService(allergenMongo,mealMongo,openFoodFactsApi,idUtils);

    private final List<String> ingredients = new ArrayList(List.of("Weizenmehl", "Spinat", "Tomatenpüree", "Wasser",  "EdamerMilch"));
    private final List<Product> emptyProductList = new ArrayList<>();

    Product mockProduct1 = Product.builder()
            ._id("1")
            .product_name("Kinsder")
            .brands("Rewe")
            .image_front_thumb_url("www.thumbnail.de")
            .ingredients_text_de(ingredients)
            .build();
    Product mockProduct2 = Product.builder()
            ._id("1")
            .product_name("Tortellini")
            .brands("Rewe")
            .image_front_thumb_url("www.thumbnail.de")
            .ingredients_text_de(ingredients)
            .build();

    Meal meal = Meal.builder()
            .mealOfUserId("User")
            .mealId("1")
            .date("01-02-1999")
            .mealDaytime("breakfast")
            .products(new ArrayList<>())
            .allergens(new ArrayList<>())
            .hasSideEffect(false)
            .sideEffects(new ArrayList<>())
            .ratingOfSideEffects(0)
            .build();

    private final List<String> testIngredients_text_de = new ArrayList<>(List.of(
            "Eidotter", "Eier", "Milch", "ABSADAS", "Butter"
    ));

    private final AddMealDto emptyAddMealDtoMock = AddMealDto.builder()
            .userId("testUser")
            .mealParam("breakfast")
            .addMealListOfProducts(emptyProductList)
            .build();

    private final AddMealDto addMealDtoMock = AddMealDto.builder()
            .userId("testUser")
            .mealParam("breakfast")
            .addMealListOfProducts(new ArrayList<>(List.of(
                    (mockProduct2))))
            .build();



 /*   @Test
    @DisplayName("Should Return List of Product with Kinder in it")
    void searchProductsByNameServiceShouldReturnList() throws UnirestException {
        // GIVEN
        String expectedTrue = "Kinder";
        List<Product> expectedProductList = new ArrayList<>(List.of(mockProduct1,mockProduct2));

        List<Product> actual = openFoodFactsApi.searchProductByName(expectedTrue);
        when(actual).thenReturn(expectedProductList);
        // WHEN
        List<Product> trueResult = mealService.searchProductsByNameService(expectedTrue);


    }*/

    @Test
    @DisplayName("Should Return Empty List of Product")
    void productNotFoundWhenSearchProductsByNameService() throws UnirestException {
        //Given
        String productName = "Pizza";
        when(mealService.searchProductsByNameService(productName)).thenReturn(emptyProductList);
        //When
        List<Product> actual = mealService.searchProductsByNameService(productName);
        when(actual).thenReturn(emptyProductList);
        // Then
        assertThat(actual, is(emptyProductList));
    }

    @Test
    @DisplayName("Should get Meal DTO Return Meal")
    void addMealToUser() {
        //GIVEN
        when(mealService.addMealToUser(addMealDtoMock)).thenReturn(meal);
        // WHEN
        Meal actual =mealService.addMealToUser(addMealDtoMock);
        //THEN
        assertThat(actual, is(meal));
    }

    @Test
    @DisplayName("Helper-Function that adds allergens into the addMealToUser() build")
    void addAllergens() {
        // GIVEN
        AddMealDto dto = AddMealDto.builder()
                .userId("testUser")
                .mealParam("breakfast")
                .addMealListOfProducts(emptyProductList)
                .build();
        // WHEN
        List<Allergen> actual = mealService.addAllergens(dto);

        // THEN
        assertThat(actual.size(),is(0));
    }
}
