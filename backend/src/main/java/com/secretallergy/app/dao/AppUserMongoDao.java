package com.secretallergy.app.dao;

import com.secretallergy.app.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AppUserMongoDao extends PagingAndSortingRepository<AppUser, String> {
}
