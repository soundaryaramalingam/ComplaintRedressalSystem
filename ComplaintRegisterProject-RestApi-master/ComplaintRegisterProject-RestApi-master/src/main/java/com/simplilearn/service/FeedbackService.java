package com.simplilearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Feedback;
import com.simplilearn.repository.FeedbackRepository;

@Service
public class FeedbackService {
@Autowired
private FeedbackRepository feedbackrepository;

public void save(Feedback feedback)
{
	feedbackrepository.save(feedback);
}

public List<Feedback> getall()
{
	return feedbackrepository.findAll();
}
}
