package com.simplilearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.entity.Feedback;



public interface FeedbackRepository extends JpaRepository<Feedback,Long>{

}
