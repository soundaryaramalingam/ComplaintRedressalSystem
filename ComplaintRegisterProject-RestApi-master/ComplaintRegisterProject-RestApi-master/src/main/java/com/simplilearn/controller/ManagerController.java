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
import com.simplilearn.entity.Manager;
import com.simplilearn.service.ManagerService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ManagerController {
	@Autowired
	private ManagerService managerservice;
	
	@PostMapping("/manager")
	public void savemanager(@RequestBody Manager manager)
	{
		managerservice.save(manager);
	}

	@GetMapping("/manager/{id}")
	public Manager getsinglemanager(@PathVariable long id)
	{
		return managerservice.getsinglevalue(id);
	}
	@GetMapping("/manager")
	public List<Manager> getallamanagers()
	{
		return managerservice.getall();
	}
	
	@PutMapping("/manager/{id}")
	public void updatemanager(@PathVariable long id,@RequestBody Manager manager)
	{
		managerservice.update(manager, id);
	}

	@DeleteMapping("/manager/{id}")
	public void deletemanager(@PathVariable long id)
	
	{
		managerservice.delete(id);
	}
}
