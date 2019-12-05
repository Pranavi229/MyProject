package com.cognizant.vendor.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cognizant.vendor.model.USER;
import com.cognizant.vendor.model.Vendor;
import com.cognizant.vendor.repository.UserRepository;
import com.cognizant.vendor.repository.VendorRepository;

@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	VendorRepository vendorRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		USER user = userRepository.findByUsername(username);
		System.out.println("fffffffffffffffffffffffffffffffffffffffuuuu" + user);
		Vendor vendor = vendorRepository.findByVname(username);
		System.out.println("fffffffffffffffffffffffffffffffffffbvvvvvvv" + vendor);
		System.out.println("ttttttttttttttttttttttttttttttttttttttttttttttttttttiddddd" + user.getId());
		// System.out.println("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"+vendor.getVname());

		if (user == null) {
			System.out.println("in first if");
			throw new UsernameNotFoundException("Exception user name not found");
		} else if (vendor != null && user.getId().equalsIgnoreCase(vendor.getVname()) && vendor.isStatus() == false) {
			System.out.println("in sec ifffffffffffffffffffffff");
			throw new UsernameNotFoundException("Registration not approved");
		}

		else {

			System.out.println("iiiiiiiiiiin else");
			AppUser appUser = new AppUser(user);
			return appUser;
		}

	}
}