package com.simplilearn.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="registercomplaint")
public class RegisterComplaint {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@ManyToOne
	private Manager manager;
	@ManyToOne
	private User user;
	private String username;
	private String address;
	private String phoneno;
	private String pincode;
	private String problem;
	@ManyToOne
	private Engineer engineer;
	private String status;
	private boolean statusvalue;
    private LocalDate date;
	
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public boolean isStatusvalue() {
		return statusvalue;
	}
	public void setStatusvalue(boolean statusvalue) {
		this.statusvalue = statusvalue;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Manager getManager() {
		return manager;
	}
	public void setManager(Manager manager) {
		this.manager = manager;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getProblem() {
		return problem;
	}
	public void setProblem(String problem) {
		this.problem = problem;
	}
	public Engineer getEngineer() {
		return engineer;
	}
	public void setEngineer(Engineer engineer) {
		this.engineer = engineer;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

	
	public RegisterComplaint(Manager manager, User user, String username, String address, String phoneno,
			String pincode, String problem, Engineer engineer, String status, boolean statusvalue, LocalDate date) {
		super();
		this.manager = manager;
		this.user = user;
		this.username = username;
		this.address = address;
		this.phoneno = phoneno;
		this.pincode = pincode;
		this.problem = problem;
		this.engineer = engineer;
		this.status = status;
		this.statusvalue = statusvalue;
		this.date = date;
	}
	public RegisterComplaint() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
