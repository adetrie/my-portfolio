package dev.alexisdetrie.service;

import dev.alexisdetrie.domain.User;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserService {

    public User findMe() {
        return User.findMe();
    }
}
