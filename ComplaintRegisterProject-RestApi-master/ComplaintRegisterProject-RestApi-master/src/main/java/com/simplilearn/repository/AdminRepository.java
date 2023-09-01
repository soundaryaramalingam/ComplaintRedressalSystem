package com.simplilearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin,Integer>  {

}
