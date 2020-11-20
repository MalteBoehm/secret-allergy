package com.secretallergy.app;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.secretallergy.app.model.Product;
import com.secretallergy.app.model.Products;
import com.mashape.unirest.http.Unirest;
import org.apache.tomcat.util.json.JSONParser;
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
				Unirest.get("https://de.openfoodfacts.org/cgi/search.pl?search_terms=tortellini&sort_by=unique_scans_n&json=true")
						.header("Accept", "application/json")
						.header("User-Agent", "Secret-Allergy")
						.header("Authorization", "Basic bWFsdGViOlhjWVczMTgxMQ==")
						.asJson().getBody().getObject()
						.getJSONArray("products");

		Iterator<Object> arrayliste = products.iterator();
		Iterable<Object> defg =  ()-> arrayliste;

		ArrayList<Product> productlist = new ArrayList<>();
		StreamSupport.stream(defg.spliterator(),false)
				.map(element -> (JSONObject)element)
				.map(element -> productlist.add( new Product(
													element.getString("_id"),
													element.getString("product_name"),
													element.getString("image_thumb_url"))));


		ObjectMapper objectMapper = new ObjectMapper();


		objectMapper.readValue(products.get(0).toString(), Product.class);
	}

//
//		JSONObject productsJSON = products.getBody().getObject();
//		JSONArray productsArray = productsJSON.getJSONArray("products");
//
//
//		List<Product> myProduct = new ArrayList<>();

//		for(int i = 0; i < productsArray.length(); i++) {
//
//			String _id = productsArray.get(i).
//			 myProduct.add(new Product(productsArray[i].,
//					 "",
//					 "",
//					 ""));
//
//		}





}

