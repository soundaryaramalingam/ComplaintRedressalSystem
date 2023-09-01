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


import com.simplilearn.entity.RegisterComplaint;
import com.simplilearn.service.ComplaintService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ComplaintController {

	@Autowired
	private ComplaintService complaintservice;
	
	@PostMapping("/complaint")
	public void savecomplaint(@RequestBody RegisterComplaint complaint)
	{
		complaintservice.save(complaint);
	}

	
	@GetMapping("/complaint")
	public List<RegisterComplaint> getallcomplaints()
	{
		return complaintservice.getallcomplaint();
	}
	
    @GetMapping("/complaint/{id}")
    public RegisterComplaint getsinglecomplaint(@PathVariable long id)
    {
    	return complaintservice.getsingle(id);
    }
    
    @PutMapping("/complaint/{id}")
    public void updatecomplaint(@RequestBody RegisterComplaint complaint,@PathVariable long id)
    {
    	complaintservice.update(id, complaint);
    }
    
    @DeleteMapping("/complaint/{id}")
    public void deletecomplaint(@PathVariable long id)
    {
    	complaintservice.delete(id);
    }
}
