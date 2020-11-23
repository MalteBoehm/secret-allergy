//package com.secretallergy.app.config;
//
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class MongoDbUserDetailsService implements UserDetailsService {
//
//    private final UserMongoDao userRepository;
//
//    public MongoDbUserDetailsService(UserMongoDao userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Optional<MegaManagerUser> matchingUser = userRepository.findById(username);
//        if (matchingUser.isPresent()) {
//            return new User(username, matchingUser.get().getPassword(), List.of());
//        }
//        throw new UsernameNotFoundException("User with name " + username + " not found");
//    }
//}
