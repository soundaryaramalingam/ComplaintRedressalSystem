package com.simplilearn.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="manager")
public class Manager {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
   private long id;
	private String username;
	private String email;
	private String password;
	private String phoneno;
	private String address;
	private String pincode;
	@OneToMany(mappedBy="manager")
	private List<RegisterComplaint> m=new ArrayList<RegisterComplaint>();
	@OneToMany(mappedBy="manager")
	private List<SystemComplaint> m1=new ArrayList<SystemComplaint>();
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public Manager(String username, String email, String password, String phoneno, String address, String pincode) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.phoneno = phoneno;
		this.address = address;
		this.pincode = pincode;
	}
	public Manager() {
		super();
	
	}
}
