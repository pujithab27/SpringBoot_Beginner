package com.example.demo.services;

import com.example.demo.models.User;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final List<User> allUsers;
    private int currentId = 3;

    public UserService() {
        allUsers = new ArrayList<>();
        allUsers.add(new User(1, "John Doe", "Male", "/images/john.png"));
        allUsers.add(new User(2, "Jane Smith", "Female", "/images/jane.png"));
    }

    public List<User> getAllUsers() {
        return Collections.unmodifiableList(allUsers);
    }

    public User getUserById(int id) {
        for (User user : allUsers) {
            if (user.getId() == id) {
                return user;
            }
        }
        return null;
    }

    public User addNewUser(User user) {
        user.setId(currentId++);
        allUsers.add(user);
        return user;
    }

    public User randomUser() {
        int randomIndex = ThreadLocalRandom.current().nextInt(allUsers.size());
        return allUsers.get(randomIndex);
    }
}
