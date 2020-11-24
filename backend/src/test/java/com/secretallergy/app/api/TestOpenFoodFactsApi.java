package com.secretallergy.app.api;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.dto.SearchByProductNameDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.test.context.TestPropertySource;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;

class TestOpenFoodFactsApi {

    /* Dependency */
    private OpenFoodFactsApi openFoodFactsApi;

    @Test
    @DisplayName("Test if the API Request return a HTTP Response 200")
    void testSearchProductByName() {
        // GIVEN
        HttpStatus expected = HttpStatus.OK;
        String url = "https://de.openfoodfacts.org/cgi/search.pl?search_terms=kinder riegel&sort_by=unique_scans_n&json=true";

        // WHEN
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        //THEN
        assertThat(response.getStatusCode(), is(expected));
    }
}
