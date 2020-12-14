package com.secretallergy.app.service;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.api.OpenFoodFactsApi;
import com.secretallergy.app.dao.AllergenMongoDao;
import com.secretallergy.app.dao.MealMongoDao;
import com.secretallergy.app.dto.AddMealDto;
import com.secretallergy.app.model.Meal;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.utils.IdUtils;
import lombok.val;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.List;

class MealServiceTest {

    private final AllergenMongoDao allergenMongo = mock(AllergenMongoDao.class);
    private final MealMongoDao mealMongo = mock(MealMongoDao.class);
    private final OpenFoodFactsApi openFoodFactsApi = mock(OpenFoodFactsApi.class);
    private final IdUtils idUtils = mock(IdUtils.class);

    // Mock Constructor
    private final MealService mealService = new MealService(allergenMongo, mealMongo, openFoodFactsApi, idUtils);


    private final List<String> ingredients = (List.of("Weizenmehl", "Spinat", "Tomatenpüree", "Wasser", "EdamerMilch","","   "));
    private final List<String> filteredIngredients = (List.of("Weizenmehl", "Spinat", "Tomatenpüree",  "Edamer","Milch"));
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

    Product filteredMockProduct1 = Product.builder()
            ._id("1")
            .product_name("Kinsder")
            .brands("Rewe")
            .image_front_thumb_url("www.thumbnail.de")
            .ingredients_text_de(filteredIngredients)
            .build();
    Product filteredMockProduct2 = Product.builder()
            ._id("1")
            .product_name("Tortellini")
            .brands("Rewe")
            .image_front_thumb_url("www.thumbnail.de")
            .ingredients_text_de(filteredIngredients)
            .build();

    AddMealDto emptyMealDto = AddMealDto.builder()
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
            .build();


    private final AddMealDto addMealDtoMock = AddMealDto.builder()
            .userId("testUser")
            .mealParam("breakfast")
            .addMealListOfProducts(new ArrayList<>(List.of(
                    (mockProduct2))))
            .build();


    @Test
    @DisplayName("Should Return Empty List of Product")
    void productNotFoundWhenSearchProductsByNameService() throws UnirestException {
        //Given
        val productName = "Pizza";
        when(mealService.searchProductsByNameService(productName)).thenReturn(emptyProductList);
        //When
        val actual = mealService.searchProductsByNameService(productName);
        when(actual).thenReturn(emptyProductList);
        // Then
        assertThat(actual, is(emptyProductList));
    }

    @Test
    @DisplayName("Should Return List of Product")
    void productReturnResultsWhenSearchProductsByNameService() throws UnirestException {
        //Given
        val productName = "Pizza";
        var singleProduct1 = Product.builder().build();
        var singleProduct2 = Product.builder().build();
        var listOfProducts = List.of(singleProduct1,singleProduct2);

        when(mealService.searchProductsByNameService(productName)).thenReturn(listOfProducts);
        //When
        val actual = mealService.searchProductsByNameService(productName);
        // Then
        assertThat(actual, is(listOfProducts));
    }





    @Test
    @DisplayName("Should get Meal DTO Return Meal")
    void addMealToUser() {
        //GIVEN
        when(mealService.addMealToUser(addMealDtoMock)).thenReturn(meal);
        // WHEN
        val actual = mealService.addMealToUser(addMealDtoMock);
        //THEN
        assertThat(actual, is(meal));
    }

    @Test
    @DisplayName("Should Throw RuntimeException when Meal information is incomplete")
    void addMealToUserDoesNotAddInCompleteMeal() {


        try {
            // WHEN
            mealService.addMealToUser(emptyMealDto);
        } catch(ResponseStatusException e){
            // THEN
            assertThat(e.getStatus(), is(HttpStatus.BAD_REQUEST));
        }
    }


    @Test
    @DisplayName("Helper-Function that adds allergens into the addMealToUser() build")
    void addAllergens() {
        // GIVEN
        val dto = AddMealDto.builder()
                .userId("testUser")
                .mealParam("breakfast")
                .addMealListOfProducts(emptyProductList)
                .build();
        // WHEN
        val actual = mealService.addAllergens(dto);

        // THEN
        assertThat(actual.size(), is(0));
    }

    @Test
    void searchProductsByNameService() {
    }

    @Test
    void testAddMealToUser() {
        // todo was ist sinnvoll zu testen
    }

    @Test
    @DisplayName("Return a List of Meals for for Today")
    void getTodaysMealsOfUser() {
        //GIVEN
        val userId = "user";
        val todaysDate = LocalDate.now();
        val currentDate = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        val meal1 = Meal.builder().build();
        val meal2 = Meal.builder().build();
        val listOfReturnedMeals = List.of(meal1,meal2);
        //WHEN

        when(mealMongo.findMealByDateIsAndMealOfUserId(todaysDate.format(currentDate), userId))
                .thenReturn(listOfReturnedMeals);
        val  actual = mealService.getTodaysMealsOfUser(userId);

        //THEN
        assertThat(actual, is(listOfReturnedMeals));
    }

    @Test
    @DisplayName("Return a empty List of Meals for for Today because there were none")
    void getNoTodaysMealsOfUser() {
        //GIVEN
        val userId = "user";
        val todaysDate = LocalDate.now();
        val currentDate = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        List<Meal> listOfReturnedMeals = List.of();
        //WHEN

        when(mealMongo.findMealByDateIsAndMealOfUserId(todaysDate.format(currentDate), userId))
                .thenReturn(listOfReturnedMeals);
        val  actual = mealService.getTodaysMealsOfUser(userId);

        //THEN
        assertThat(actual, is(listOfReturnedMeals));
    }

    @Test
    void addProducts() {
        //GIVEN
        val userId = "user";
        val mealParam = "breakfast";
        val addMealDto = AddMealDto.builder()
                .userId(userId)
                .mealParam(mealParam)
                .addMealListOfProducts(List.of(mockProduct1,mockProduct2))
                .build();

        //WHEN
       var ingredients = mealService.addProducts(addMealDto);

        //THEN
        assertThat(ingredients, containsInAnyOrder(filteredMockProduct1,filteredMockProduct2));

    }

    @Test
    void testAddAllergens() {
    }
}
