package com.secretallergy.app.security;

import com.secretallergy.app.dao.AppUserDao;
import com.secretallergy.app.model.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MongoDbUserDetailsService implements UserDetailsService {

    private final AppUserDao userDao;


    public MongoDbUserDetailsService(AppUserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<AppUser> userById = userDao.findById(username);
        if(userById.isEmpty()){
            throw new UsernameNotFoundException("user not found");
        }
        return new User(username, userById.get().getPassword(), List.of());
    }
}
