package com.secretallergy.app.service;

import com.secretallergy.app.dao.AppUserDao;
import com.secretallergy.app.model.AppUser;
import com.secretallergy.app.model.Meal;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppUserService {

    // Functions for AppUser
    private final AppUserDao appUserDao;
    private final MongoTemplate mongoTemplate;

    public AppUserService(AppUserDao appUserDao, MongoTemplate mongoTemplate) {
        this.appUserDao = appUserDao;
        this.mongoTemplate = mongoTemplate;
    }

    public List<Meal> getMeals(String username){
        Optional<AppUser> user = appUserDao.findById(username);
        if(user.isPresent()){
            return user.get().getMeals();
        }
        throw new UsernameNotFoundException(username+" not found");
    }
}
