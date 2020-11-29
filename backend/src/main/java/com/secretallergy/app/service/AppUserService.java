package com.secretallergy.app.service;

import com.secretallergy.app.dao.AppUserMongoDao;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

@Service
public class AppUserService {

    // Functions for AppUser
    private final AppUserMongoDao appUserMongoDao;
    private final MongoTemplate mongoTemplate;

    public AppUserService(AppUserMongoDao appUserMongoDao, MongoTemplate mongoTemplate) {
        this.appUserMongoDao = appUserMongoDao;
        this.mongoTemplate = mongoTemplate;
    }
}
