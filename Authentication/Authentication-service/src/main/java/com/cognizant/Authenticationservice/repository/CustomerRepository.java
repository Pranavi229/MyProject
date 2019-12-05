package com.cognizant.Authenticationservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.Authenticationservice.model.Customer;




@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {

	public Customer findByid(String id);

}
