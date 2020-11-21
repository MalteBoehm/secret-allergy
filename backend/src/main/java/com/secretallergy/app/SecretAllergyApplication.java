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
	}
}

