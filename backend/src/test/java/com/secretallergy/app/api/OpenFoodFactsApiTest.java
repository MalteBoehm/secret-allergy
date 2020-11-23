package com.secretallergy.app.api;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.model.Product;
import org.junit.jupiter.api.Test;

import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

class OpenFoodFactsApiTest {

    private final OpenFoodFactsApi openFoodFactsApi = new OpenFoodFactsApi();


    @Test
    void searchProductByName() throws FileNotFoundException, UnirestException {
        // Given
        String product = "Kinder Riegel";
        String expectedContains = "Kinder";

        // When
        List<Product> actual = openFoodFactsApi.searchProductByName(product);
        // Then
        assertThat((actual.get(0).getProduct_name().contains(expectedContains)), is(true));




    }
}
