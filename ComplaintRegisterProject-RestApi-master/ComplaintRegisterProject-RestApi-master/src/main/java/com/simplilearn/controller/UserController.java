package com.simplilearn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.Manager;
import com.simplilearn.entity.User;
import com.simplilearn.service.UserService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	private UserService userservice;
	
	@PostMapping("/user")
	public void saveuser(@RequestBody User user)
	{
		userservice.save(user);
	}

	@GetMapping("/user/{id}")
	public User getsingleuser(@PathVariable long id)
	{
		return userservice.getsinglevalue(id);
	}
	@GetMapping("/user")
	public List<User> getallusers()
	{
		return userservice.getall();
	}
	
	@PutMapping("/user/{id}")
	public void updatemanager(@PathVariable long id,@RequestBody User user)
	{
		userservice.update(user, id);
	}

	@DeleteMapping("/user/{id}")
	public void deletemanager(@PathVariable long id)
	
	{
		userservice.delete(id);
	}
}
