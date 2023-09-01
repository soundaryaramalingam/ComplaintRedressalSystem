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

import com.simplilearn.entity.Engineer;
import com.simplilearn.service.EngineerService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class EngineerContrller {

	@Autowired
	private EngineerService engineerservice;
	
	@PostMapping("/engineer")
	public void saveengineer(@RequestBody Engineer engineer)
	{
		engineerservice.save(engineer);
	}

	@GetMapping("/engineer/{id}")
	public Engineer getengineer(@PathVariable long id)
	{
		return engineerservice.getsinglevalue(id);
	}
	@GetMapping("/engineer")
	public List<Engineer> getallengineer()
	{
		return engineerservice.getall();
	}
	
	@PutMapping("/engineer/{id}")
	public void updateengineer(@PathVariable long id,@RequestBody Engineer engineer)
	{
		engineerservice.update(engineer, id);
	}

	@DeleteMapping("/engineer/{id}")
	public void deleteengineer(@PathVariable long id)
	
	{
		engineerservice.delete(id);
	}
	
}
