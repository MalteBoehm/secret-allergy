package com.secretallergy.app.dao;

import com.secretallergy.app.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserDao extends PagingAndSortingRepository<AppUser, String> {
}
