package com.simplilearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.simplilearn.entity.User;

public interface UserRepository  extends JpaRepository<User,Long> {

}
