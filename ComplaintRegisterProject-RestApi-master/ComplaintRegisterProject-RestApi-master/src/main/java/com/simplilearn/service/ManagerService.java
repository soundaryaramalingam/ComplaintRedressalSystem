package com.simplilearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Manager;
import com.simplilearn.entity.User;
import com.simplilearn.repository.ManagerRepository;


@Service
public class ManagerService {

	@Autowired
	private ManagerRepository managerrepository;
	
	public void save(Manager manager)
	{
		managerrepository.save(manager);
	}
	
	public Manager getsinglevalue(long id)
	{
		return managerrepository.findById( id).get();
	}
	
	public List<Manager> getall()
	{
		return managerrepository.findAll();
		
	}
	
	public void update(Manager manager,long id)
	{
		Manager ref=managerrepository.findById( id).get();
		ref.setAddress(manager.getAddress());
		ref.setEmail(manager.getEmail());
		ref.setPassword(manager.getPassword());
		ref.setPhoneno(manager.getPhoneno());
		ref.setPincode(manager.getPincode());
		ref.setUsername(manager.getUsername());
		managerrepository.save(ref);
	}
	
	public void delete(long id)
	{
		managerrepository.deleteById(id);
	}
}
