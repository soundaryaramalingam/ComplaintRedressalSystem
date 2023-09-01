package com.simplilearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.SystemComplaint;
import com.simplilearn.repository.SystemComplaintRepository;

@Service
public class SystemComplaintService {
	@Autowired
	private SystemComplaintRepository systemrepository;
	
	public void save(SystemComplaint issues)
	{
		systemrepository.save(issues);
	}
	
	public List<SystemComplaint> getall()
	{
		return systemrepository.findAll();
	}
	
}
