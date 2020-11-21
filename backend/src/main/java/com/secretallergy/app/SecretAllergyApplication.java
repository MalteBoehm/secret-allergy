package com.secretallergy.app;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.model.Product;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@SpringBootApplication
public class SecretAllergyApplication {

	public static void main(String[] args) throws UnirestException, JsonProcessingException {
		SpringApplication.run(SecretAllergyApplication.class, args);


		Unirest.setTimeouts(3000, 3000);
		JSONArray products =
				Unirest.get("https://de.openfoodfacts.org/cgi/search.pl?search_terms=dazs&sort_by=unique_scans_n&json=true")
						.header("Accept", "application/json")
						.header("User-Agent", "Secret-Allergy")
						.header("Authorization", "Basic bWFsdGViOlhjWVczMTgxMQ==")
						.asJson().getBody().getObject().getJSONArray("products");

		List<Product> newList = new ArrayList<>();
		for (int i = 0; i < products.length(); i++) {
			String id = products.getJSONObject(i).getString("_id");
			String name = products.getJSONObject(i).getString("product_name_de");
			String imageUrl = products.getJSONObject(i).getString("image_url");

			newList.add(new Product(id, name, imageUrl));
		}
		System.out.println(newList.get(0).toString());

	}
}

