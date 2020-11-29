package com.secretallergy.app.dao;

import com.secretallergy.app.model.AppUser;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface AppUserDao extends PagingAndSortingRepository<AppUser, String> {
}
