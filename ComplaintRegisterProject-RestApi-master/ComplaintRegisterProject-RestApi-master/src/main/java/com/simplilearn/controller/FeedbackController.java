package com.simplilearn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.Feedback;
import com.simplilearn.service.FeedbackService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class FeedbackController {
@Autowired
private FeedbackService feedbackservice;

@PostMapping("/feedback")
public void savefeedback(@RequestBody Feedback feedback)
{
	feedbackservice.save(feedback);
}
@GetMapping("/feedback")
public List<Feedback> getallfeedback()
{
	return feedbackservice.getall();
}
}
