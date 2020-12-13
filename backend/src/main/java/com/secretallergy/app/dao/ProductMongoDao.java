package com.secretallergy.app.dao;
import com.secretallergy.app.model.Product;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;


public interface ProductMongoDao extends PagingAndSortingRepository<Product, String> {
}
