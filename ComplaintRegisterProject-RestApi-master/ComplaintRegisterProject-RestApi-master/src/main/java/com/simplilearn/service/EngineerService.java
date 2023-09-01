package com.simplilearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Engineer;
import com.simplilearn.repository.EngineerRepository;



@Service
public class EngineerService {
	@Autowired
	private EngineerRepository engineerrepository;
	
	public void save(Engineer engineer)
	{
		engineerrepository.save(engineer);
	}
	
	public Engineer getsinglevalue(long id)
	{
		return engineerrepository.findById( id).get();
	}
	
	public List<Engineer> getall()
	{
		return engineerrepository.findAll();
		
	}
	public void update(Engineer engineer,long id)
	{
		Engineer ref=engineerrepository.findById( id).get();
		ref.setAddress(engineer.getAddress());
		ref.setEmail(engineer.getEmail());
		ref.setPassword(engineer.getPassword());
		ref.setPhoneno(engineer.getPhoneno());
		ref.setPincode(engineer.getPincode());
		ref.setUsername(engineer.getUsername());
		engineerrepository.save(ref);
	}
	
	public void delete(long id)
	{
		engineerrepository.deleteById(id);
	}
}
