package com.simplilearn.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="feedback")
public class Feedback {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private long id;
@ManyToOne
private User user;
private String problem;
private String review;
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
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
public String getReview() {
	return review;
}
public void setReview(String review) {
	this.review = review;
}
public Feedback(User user, String problem, String review) {
	super();
	this.user = user;
	this.problem = problem;
	this.review = review;
}
public Feedback() {
	super();
	// TODO Auto-generated constructor stub
}

}
