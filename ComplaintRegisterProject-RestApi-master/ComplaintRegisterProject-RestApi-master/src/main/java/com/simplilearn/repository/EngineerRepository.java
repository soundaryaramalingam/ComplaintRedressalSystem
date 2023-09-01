package com.simplilearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.simplilearn.entity.Engineer;

public interface EngineerRepository  extends JpaRepository<Engineer,Long> {

}
