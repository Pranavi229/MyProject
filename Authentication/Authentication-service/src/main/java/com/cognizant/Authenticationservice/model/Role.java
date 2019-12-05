package com.cognizant.Authenticationservice.model;



import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "role")
public class Role {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "role_id")
	int id;

	@Column(name = "role_name")
	String name;

	@ManyToMany
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "role_role_id"), 
	inverseJoinColumns = @JoinColumn(name = "user_id"))
	private List<USER> user;

	public List<USER> getUser() {
		return user;
	}

	public void setUser(List<USER> user) {
		this.user = user;
	}
	
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
