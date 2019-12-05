package com.cognizant.Authenticationservice.model;



import java.sql.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="vendor")
public class Vendor {

                @Id
            	 @GeneratedValue(strategy=GenerationType.IDENTITY)
                @Column(name = "vend_id")
                 int vid;
                
                @NotNull
                @Column (name = "vendor_name")    
                String vname;
                
                
                @NotNull
                @Column (name = "company_reg_no")     
                String  regno;
                
                @NotNull
                @Column (name = "vendor_type")     
                String  vendor_type;
                
                @NotNull
                @Column (name = "address")             
                String address;
                
                @NotNull
                @Column (name = "country")             
                String country;
                
                @NotNull
                @Column (name = "state")  
                String state;
                
                @NotNull
                @Column (name = "email_address")  
                String email_address;
                
                @NotNull
                @Column (name = "contact_no")              
                 int  contact_no;
                
                @NotNull
                @Column (name = "website")             
                String website;
                
                @NotNull
                @Column (name = "certificate_Issued_Date")   
                Date  cer_Issued_Date;
                
                @NotNull
                @Column (name = "certificate_Validity_Date") 
                Date  certificate_Validity_date;
                
                @NotNull
                @Column (name = "year_of_Establishment")   
               Date  year_of_Establishment;
                
                @NotNull
                @Column (name = "payment_Gateway")          
                String pay;
                
                @NotNull
                @Column (name = "password")         
                String password;
                
                @NotNull
                @Column (name = "v_status")         
                boolean status;
                
                

               
				
				 public int getVid() {
						return vid;
					}



					public void setVid(int vid) {
						this.vid = vid;
					}



					public String getVname() {
						return vname;
					}



					public void setVname(String vname) {
						this.vname = vname;
					}



					public String getRegno() {
						return regno;
					}



					public void setRegno(String regno) {
						this.regno = regno;
					}



					public String getVendor_type() {
						return vendor_type;
					}



					public void setVendor_type(String vendor_type) {
						this.vendor_type = vendor_type;
					}



					public String getAddress() {
						return address;
					}



					public void setAddress(String address) {
						this.address = address;
					}



					public String getCountry() {
						return country;
					}



					public void setCountry(String country) {
						this.country = country;
					}



					public String getState() {
						return state;
					}



					public void setState(String state) {
						this.state = state;
					}



					public String getEmail_address() {
						return email_address;
					}



					public void setEmail_address(String email_address) {
						this.email_address = email_address;
					}



					public int getContact_no() {
						return contact_no;
					}



					public void setContact_no(int contact_no) {
						this.contact_no = contact_no;
					}



					public String getWebsite() {
						return website;
					}



					public void setWebsite(String website) {
						this.website = website;
					}



					public Date getCer_Issued_Date() {
						return cer_Issued_Date;
					}



					public void setCer_Issued_Date(Date cer_Issued_Date) {
						this.cer_Issued_Date = cer_Issued_Date;
					}



					public Date getCertificate_Validity_date() {
						return certificate_Validity_date;
					}



					public void setCertificate_Validity_date(Date certificate_Validity_date) {
						this.certificate_Validity_date = certificate_Validity_date;
					}



					public Date getYear_of_Establishment() {
						return year_of_Establishment;
					}



					public void setYear_of_Establishment(Date year_of_Establishment) {
						this.year_of_Establishment = year_of_Establishment;
					}



					public String getPay() {
						return pay;
					}



					public void setPay(String pay) {
						this.pay = pay;
					}



					public String getPassword() {
						return password;
					}



					public void setPassword(String password) {
						this.password = password;
					}



					public boolean isStatus() {
						return status;
					}



					public void setStatus(boolean status) {
						this.status = status;
					}



					@Override
					public String toString() {
						return "Vendor [vid=" + vid + ", vname=" + vname + ", regno=" + regno + ", vendor_type="
								+ vendor_type + ", address=" + address + ", country=" + country + ", state=" + state
								+ ", email_address=" + email_address + ", contact_no=" + contact_no + ", website="
								+ website + ", cer_Issued_Date=" + cer_Issued_Date + ", certificate_Validity_date="
								+ certificate_Validity_date + ", year_of_Establishment=" + year_of_Establishment
								+ ", pay=" + pay + ", password=" + password + ", status=" + status + "]";
					}


                
                
}
