package com.simplilearn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Admin;
import com.simplilearn.repository.AdminRepository;

@Service	
public class AdminService {
	@Autowired
	private AdminRepository adminrepository;

	public Admin saveuser(Admin admin)
	{
		return adminrepository.save(admin);
	}

	public Admin getadminbyid(int id)
	{
		return adminrepository.findById(id).get();
	}

	public void updateadmin(int id,Admin admin)
	{
		Admin adminref=adminrepository.findById(id).get();
		adminref.setUsername(admin.getUsername());
		adminref.setUserpassword(admin.getUserpassword());
		adminrepository.save(adminref);
	}
}
