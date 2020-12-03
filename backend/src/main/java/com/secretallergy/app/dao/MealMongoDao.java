package com.secretallergy.app.dao;

import com.secretallergy.app.model.Meal;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MealMongoDao extends PagingAndSortingRepository<Meal, String> {
}
