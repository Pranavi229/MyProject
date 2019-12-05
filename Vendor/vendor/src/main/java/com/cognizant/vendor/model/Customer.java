package com.cognizant.vendor.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "customer")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "c_id")
	int d_id;

	@Column(name = "cust_id")
	String id;

	@NotNull
	@Size(min = 1, max = 30, message = "Name should be 1-30 characters")
	@Column(name = "first_name")
	String firstname;

	@NotNull
	@Size(min = 1, max = 30, message = "Name should be 1-30 characters")
	@Column(name = "last_name")
	String lastname;

	@Column(name = "age")
	int age;

	@NotNull
	@Size(min = 1, max = 30, message = "Name should be 1-30 characters")
	@Column(name = "gender")
	String gender;

	@Column(name = "contact_num")
	int contact;

	@NotNull
	// @Size(min = 2, message = "Password must have more than 6 characters")
	@Column(name = "pan_no")
	String pan_number;

	@NotNull
	// @Size(min = 2, message = "Password must have more than 6 characters")
	@Column(name = "aadhar_no")
	String aadhar_number;

	@NotNull
	// @Size(min = 2, message = "Password must have more than 6 characters")
	@Column(name = "password")
	String password;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getContact() {
		return contact;
	}

	public void setContact(int contact) {
		this.contact = contact;
	}

	public String getPan_number() {
		return pan_number;
	}

	public void setPan_number(String pan_number) {
		this.pan_number = pan_number;
	}

	public String getAadhar_number() {
		return aadhar_number;
	}

	public void setAadhar_number(String aadhar_number) {
		this.aadhar_number = aadhar_number;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Customer [d_id=" + d_id + ", id=" + id + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", age=" + age + ", gender=" + gender + ", contact=" + contact + ", pan_number=" + pan_number
				+ ", aadhar_number=" + aadhar_number + ", password=" + password + "]";
	}

}
