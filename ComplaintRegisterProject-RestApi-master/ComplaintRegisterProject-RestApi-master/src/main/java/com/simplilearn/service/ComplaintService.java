package com.simplilearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.simplilearn.entity.RegisterComplaint;
import com.simplilearn.repository.ComplaintRepository;

@Service
public class ComplaintService {
	
@Autowired
private ComplaintRepository complaintrepository;

public void save(RegisterComplaint complaint)
{
	complaintrepository.save(complaint);
}

public RegisterComplaint getsingle(long id)
{
	return complaintrepository.findById(id).get();
}

public List<RegisterComplaint> getallcomplaint()
{
return complaintrepository.findAll();	
}
public void update(long id,RegisterComplaint ref)
{
	RegisterComplaint complaint=complaintrepository.findById(id).get();
	complaint.setManager(ref.getManager());
	complaint.setAddress(ref.getAddress());
	complaint.setEngineer(ref.getEngineer());
	complaint.setPhoneno(ref.getPhoneno());
	complaint.setPincode(ref.getPincode());
	complaint.setProblem(ref.getProblem());
	complaint.setUser(ref.getUser());
	complaint.setStatus(ref.getStatus());
	complaint.setUsername(ref.getUsername());
	complaint.setStatusvalue(ref.isStatusvalue());
	complaint.setDate(ref.getDate());
	complaintrepository.save(complaint);
}

public void delete(long id)
{
	complaintrepository.deleteById(id);
}
}
