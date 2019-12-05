package com.cognizant.Authenticationservice.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.Authenticationservice.model.USER;



@Repository
public interface UserRepository extends JpaRepository<USER, Integer> {

	 @Query("FROM USER u where u.id=?1")
	public USER findByUsername(String id);

	 
	 
	 @Query("FROM USER u where u.id=?1")
		public USER getVendors(String username);
	/*@Query("FROM USER u where u.username=?1")
	public USER getMovies(String username);*/
}
