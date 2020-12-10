package com.secretallergy.app.controller;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.api.OpenFoodFactsApi;
import com.secretallergy.app.model.Product;
import com.sun.jna.platform.win32.ObjBase;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class MealControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

   @Autowired
    private OpenFoodFactsApi openFoodFactsApi;

    /*@Test
    @DisplayName("Get confirmation back that the Endpoint return List")
    void searchProductsByName() throws UnirestException {
        // Given
        String product = "gustavo Pizza Margherita";
        String url = "http://localhost:" + port + "/api/product?products="+product;
        List<Product> expectedProduct = List.of(
                new Product("4260414150449","Pizza Margherita","Gustavo Gusto",
                        List.of
                ("53% Teig (_Weizenmehl_",  " Trinkwasser",  " Olivenöl",  " Speisesalz",  " Frischbackhefe)",  " 22% Tomatensoße (Schältomaten",  " Trinkwasser",  " Speisesalz",  " Olivenöl",  " Gewürze)",  " 25% schnittfester _Mozzarella_ (pasteurisierte _Kuhmilch_",  " Salz",  " mikrobieller Labaustauschstoff",
                " Milchsäurebakterienkulturen)"),"https://static.openfoodfacts.org/images/products/426/041/415/0449/front_de.20.400.jpg"));

        // When
        ResponseEntity<JSONObject[]> confirmedResponse = restTemplate.getForEntity(url, JSONObject[].class);
        // Then
        assertThat(confirmedResponse.getStatusCode(), is(HttpStatus.OK));
        assertThat(openFoodFactsApi.searchProductByName(product).get(0), is(expectedProduct.get(0)));
    }*/
}

