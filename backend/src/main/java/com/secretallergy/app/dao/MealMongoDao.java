package com.secretallergy.app.dao;

import com.secretallergy.app.model.Meal;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface MealMongoDao extends PagingAndSortingRepository<Meal, String> {
    List<Meal> findMealByDateIsAndMealOfUserId(String date, String userId);


}
