package com.cognizant.vendor.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.vendor.model.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Integer> {

	@Query("FROM Vendor u where u.vname=?1")
	public Vendor findByUsername(String name);

	public List<Vendor> findByStatusTrue();

	public Vendor findByVname(String vname);

}
