package com.simplilearn.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="systemcomplaint")
public class SystemComplaint {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@ManyToOne
	private Manager manager;
	@ManyToOne
	private User user;
	private String problem;
	@ManyToOne
	private Engineer engineer;
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
	public SystemComplaint( User user,Manager manager, Engineer engineer, String problem) {
		super();
		this.manager = manager;
		this.user = user;
		this.problem = problem;
		this.engineer = engineer;
	}
	public SystemComplaint() {
		super();
		// TODO Auto-generated constructor stub
	}

}
