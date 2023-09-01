package com.simplilearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.simplilearn.entity.RegisterComplaint;


public interface ComplaintRepository extends JpaRepository<RegisterComplaint,Long>{

}
