package com.simplilearn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.Admin;
import com.simplilearn.service.AdminService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AdminController {
	
@Autowired
private AdminService adminservice;

@GetMapping("/admin/{id}")
public Admin getadmin(@PathVariable int id)
{
	return adminservice.getadminbyid(id);
}

@PutMapping("/admin/{id}")
public void updateadmin(@PathVariable int id,@RequestBody Admin admin)
{
	adminservice.updateadmin(id, admin);
}
}
