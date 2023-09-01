package com.simplilearn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.SystemComplaint;
import com.simplilearn.service.SystemComplaintService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class SystemComplaintController {

	@Autowired
	private SystemComplaintService systemservice;
	
	@GetMapping("/issues")
	public List<SystemComplaint> getallissues()
	{
		return systemservice.getall();
	}
	
	@PostMapping("/issues")
	public void saveissue(@RequestBody SystemComplaint issues)
	{
		systemservice.save(issues);
	}
}
