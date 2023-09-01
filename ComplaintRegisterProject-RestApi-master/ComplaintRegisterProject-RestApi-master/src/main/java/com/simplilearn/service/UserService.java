package com.simplilearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Engineer;
import com.simplilearn.entity.User;
import com.simplilearn.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userrepository;
	
	public void save(User user)
	{
		userrepository.save(user);
	}
	
	public User getsinglevalue(long id)
	{
		return userrepository.findById( id).get();
	}
	
	public List<User> getall()
	{
		return userrepository.findAll();
		
	}
	
	public void update(User user,long id)
	{
		User ref=userrepository.findById( id).get();
		ref.setAddress(user.getAddress());
		ref.setEmail(user.getEmail());
		ref.setPassword(user.getPassword());
		ref.setPhoneno(user.getPhoneno());
		ref.setPincode(user.getPincode());
		ref.setUsername(user.getUsername());
		userrepository.save(ref);
	}
	
	public void delete(long id)
	{
		userrepository.deleteById(id);
	}
	
	
	
}
