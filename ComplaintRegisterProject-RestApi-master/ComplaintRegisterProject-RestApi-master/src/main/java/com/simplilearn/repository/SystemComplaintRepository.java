package com.simplilearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.simplilearn.entity.SystemComplaint;

public interface SystemComplaintRepository extends JpaRepository<SystemComplaint,Long>{

}
