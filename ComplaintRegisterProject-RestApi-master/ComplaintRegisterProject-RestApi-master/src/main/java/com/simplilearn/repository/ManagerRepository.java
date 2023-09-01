package com.simplilearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.simplilearn.entity.Manager;

public interface ManagerRepository  extends JpaRepository<Manager,Long> {

}
