package com.cognizant.vendor;



import java.sql.Date;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import com.cognizant.vendor.exception.UserAlreadyExistsException;
import com.cognizant.vendor.exception.VendorAlreadyExistsException;
import com.cognizant.vendor.model.USER;
import com.cognizant.vendor.model.Vendor;
import com.cognizant.vendor.repository.RoleRepository;
import com.cognizant.vendor.repository.UserRepository;
import com.cognizant.vendor.repository.VendorRepository;
import com.cognizant.vendor.security.AppUserDetailsService;
import com.cognizant.vendor.service.UserDetailsService;
import com.cognizant.vendor.service.VendorService;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class VendorApplicationTests {
	
	@Autowired
    UserDetailsService userDetailsService;
	
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    VendorRepository vendorRepository;
    
    @Autowired
    VendorService vendorservice;
    
    @Autowired
    UserRepository userRepository;
    
    
    
    @Autowired
private  MockMvc mvc;



	@Test
	 public void contextLoads() {
	} 
	
   @Test
    public void testSignUp() throws  VendorAlreadyExistsException{
          Vendor vendor = new Vendor(7, "enavi", "ra111", "dth", "op", "india", "delhi", "op", 999999999, "yyy", new Date(2020-01-01), new Date(2019-12-12), new Date(2019-12-11), "ccc", "pranavi", false);
          userDetailsService.VendorSignup(vendor);
    vendorRepository.findByUsername("enavi");
    Assert.assertTrue(vendorRepository.findByUsername("enavi")!=null);
    }
   
   
   @Test
   public void testSignUp1() throws  VendorAlreadyExistsException{
         Vendor vendor = new Vendor(1, "avi", "ra111", "dth", "op", "india", "delhi", "op", 999999999, "yyy", new Date(2020-01-01), new Date(2019-12-12), new Date(2019-12-11), "ccc", "pranavi", false);
         userDetailsService.VendorSignup(vendor);
   vendorRepository.findByUsername("avi");
   Assert.assertTrue(vendorRepository.findByUsername("avi")!=null);
   }
	
//	@Test
//   public void testGetProduct() throws Exception{
//          ResultActions resultActions = mvc.perform(get("/vendors/avi"));
//          resultActions.andExpect(status().isOk());
//          resultActions.andExpect(jsonPath("$.vname").exists());
//         resultActions.andExpect(jsonPath("$.vname").value("avi"));
//  }
//  
//   
   @Test
   public void testProductAll() throws Exception{
                   ResultActions actions=mvc.perform(get("/vendors"));
                   actions.andExpect(status().isOk());
   }
   
   @Test
   public void testDeleteProduct(){
                   vendorservice.deleteVendors("bbb");
                   Vendor vendor =vendorservice.getVendorname("bbb");
                   assertNotNull(vendor); 
   }
   
   
   
   
   @Test
   public void testgetByVendorName(){
	   vendorRepository.findByUsername("avi");
	   Assert.assertTrue(userRepository.findByUsername("avi")!=null);
	   
                 
   }
   
   




}
