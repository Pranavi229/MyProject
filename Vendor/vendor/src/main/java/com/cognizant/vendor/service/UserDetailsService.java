package com.cognizant.vendor.service;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.vendor.exception.CustomerAlreadyExistsException;
import com.cognizant.vendor.exception.VendorAlreadyExistsException;
import com.cognizant.vendor.model.Customer;
import com.cognizant.vendor.model.Role;
import com.cognizant.vendor.model.USER;
import com.cognizant.vendor.model.Vendor;
import com.cognizant.vendor.repository.CustomerRepository;
import com.cognizant.vendor.repository.RoleRepository;
import com.cognizant.vendor.repository.UserRepository;
import com.cognizant.vendor.repository.VendorRepository;

@Service
public class UserDetailsService {
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	CustomerRepository customerRepository;
	@Autowired
	VendorRepository vendorRepository;

	@Autowired
	UserRepository userRepository;

	/*
	 * public Boolean signup(USER user) throws UserAlreadyExistsException {
	 * 
	 * USER user1 = userRepository.findByUsername(user.getId()); if (user1 !=
	 * null) { throw new UserAlreadyExistsException(); }
	 * 
	 * else { user.setPassword(new
	 * BCryptPasswordEncoder().encode(user.getPassword())); List<Role> rolelist
	 * = new ArrayList<Role>();
	 * 
	 * Role role = roleRepository.findById(2).get(); rolelist.add(role);
	 * user.setRoles(rolelist); userRepository.save(user); return true; } }
	 */

	public boolean CustomerSignUp(@Valid Customer customer) throws CustomerAlreadyExistsException {
		// TODO Auto-generated method stub
		Customer customer1 = customerRepository.findByid(customer.getId());
		if (customer1 != null) {
			throw new CustomerAlreadyExistsException();
		} else {
			customer.setPassword(new BCryptPasswordEncoder().encode(customer.getPassword()));
			List<Role> rolelist = new ArrayList<Role>();
			Role role = roleRepository.findById(2).get();
			rolelist.add(role);
			customerRepository.save(customer);

			USER user = new USER();
			user.setId(customer.getId());
			System.out.println(customer.getPassword());
			user.setPassword(customer.getPassword());
			user.setRoles(rolelist);
			userRepository.save(user);
			return true;
		}

	}

	public Boolean VendorSignup(Vendor vendor) throws VendorAlreadyExistsException {

		Vendor vendor1 = vendorRepository.findByUsername(vendor.getVname());
		if (vendor1 != null) {
			throw new VendorAlreadyExistsException();
		}

		else {
			vendor.setPassword(new BCryptPasswordEncoder().encode(vendor.getPassword()));
			List<Role> rolelist = new ArrayList<Role>();

			Role role = roleRepository.findById(3).get();
			rolelist.add(role);
			vendorRepository.save(vendor);

			USER user = new USER();
			user.setId(String.valueOf(vendor.getVname()));
			System.out.println(vendor.getPassword());
			user.setPassword(vendor.getPassword());
			user.setRoles(rolelist);
			userRepository.save(user);
			return true;
		}
	}

}
