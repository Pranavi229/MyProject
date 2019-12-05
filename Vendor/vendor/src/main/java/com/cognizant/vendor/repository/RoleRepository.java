package com.cognizant.vendor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.vendor.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

}
