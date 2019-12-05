package com.cognizant.vendor.service;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.vendor.model.USER;
import com.cognizant.vendor.model.Vendor;
import com.cognizant.vendor.repository.UserRepository;
import com.cognizant.vendor.repository.VendorRepository;

@Service
public class VendorService {

	@Autowired
	VendorRepository vendorRepository;

	@Autowired
	UserRepository userRepository;

	public List<Vendor> findAllVendors() {
		// System.out.println("-------------------IIIIIIIIII----------------"+vendorRepository.findAll());
		return vendorRepository.findAll();
	}

	public List<Vendor> getAllVendors() {
		return vendorRepository.findByStatusTrue();
	}

	@Transactional
	public void deleteVendors(String username) {

		Vendor vendor = vendorRepository.findByUsername(username);
		vendorRepository.delete(vendor);
		USER user = userRepository.findByUsername(username);
		userRepository.delete(user);
		// cartDaoCollectionImpl.deleteCartItems(userId,menuItemId);

	}

	public void checkStatus(Vendor vendor) {
		vendorRepository.save(vendor);
		// TODO Auto-generated method stub

	}

	@Transactional
	public Vendor getVendorname(String nov) {
		// TODO Auto-generated method stub
		System.out.println("Start");
		Vendor vendor = vendorRepository.findByVname(nov);
		System.out.println(vendor);
		return vendor;

	}

	public void modifyVendor(Vendor vendor) {
		// USER user = new USER();
		//
		// user.setId(vendor.getVname());
		vendorRepository.save(vendor);
		// userRepository.save(user);
		System.out.println("@@@@@@@@@@@@@@@@@@@@");
		// System.out.println(user);
		System.out.println("@@@@@@@@@@@@@@@@@@@@");
	}
	// TODO Auto-generated method stub

}
