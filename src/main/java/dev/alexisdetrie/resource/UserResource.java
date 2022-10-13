package dev.alexisdetrie.resource;

import dev.alexisdetrie.domain.User;
import dev.alexisdetrie.service.UserService;
import lombok.AllArgsConstructor;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/me")
@AllArgsConstructor
public class UserResource {

    private UserService userService;

    @GET
    public User getMe() {
        return userService.findMe();
    }
}
