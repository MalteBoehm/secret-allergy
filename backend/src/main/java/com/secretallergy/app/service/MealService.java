package com.secretallergy.app.service;

import com.secretallergy.app.dto.SearchByProductNameDto;
import com.secretallergy.app.model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MealService {


    public List<Product> searchProductsByNameService(Optional<SearchByProductNameDto> productName) {
        List<Product> list = new ArrayList<>();
        return list;
    }
}
