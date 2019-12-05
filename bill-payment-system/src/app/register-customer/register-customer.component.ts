import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../site/vendor/customer/Customer';
import { UserserviceService } from '../site/service/userservice.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  registerForm: FormGroup;
  customer: Customer;
  userCreated: boolean = null;
  error: string;
  genders: string[] = ["Male", "Female"]
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserserviceService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]*$"),
        Validators.minLength(1),
        Validators.maxLength(50),
      ]],
      lastname: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]*$"),
        Validators.minLength(1),
        Validators.maxLength(50),
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      age: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(2)
      ]],
      gender: ['', [
        Validators.required
      ]],
      pan: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      aadharNumber: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      userid: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      contactNumber: ['', [
        Validators.maxLength(10),
        Validators.minLength(1)
      ]]
    })
  }
  get firstname() {
    return this.registerForm.get('firstname');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get lastname() {
    return this.registerForm.get('lastname');
  }
  get age() {
    return this.registerForm.get('age');
  }
  get gender() {
    return this.registerForm.get('gender');
  }
  get pan() {
    return this.registerForm.get('pan');
  }
  get aadharNumber() {
    return this.registerForm.get('aadharNumber');
  }
  get userid() {
    return this.registerForm.get('userid');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get contactNumber() {
    return this.registerForm.get('contactNumber');
  }

  submit() {
    console.log(this.registerForm.value['firstname']);

    this.customer = { password: this.registerForm.value['password'], firstname: this.registerForm.value['firstname'], gender: this.registerForm.value['gender'], lastname: this.registerForm.value['lastname'], age: this.registerForm.value['age'], pan_number: this.registerForm.value['pan'], contact: this.registerForm.value['contactNumber'], aadhar_number: this.registerForm.value['aadharNumber'], id: this.registerForm.value['userid'] };
    console.log("yo", this.customer);
    this.userService.addCustomer(this.customer).subscribe(data => {
      //this.userCreated = true;
      this.userService.userCreated = true;
      console.log(this.userCreated)
      this.error = "New user created successfully"
      this.router.navigate(['/login']);

    },
      error => {
        console.log("errojjjopooooooooooooor")
        if (error.status == 400) {
          this.error = "User Already Exists";
          this.userCreated = false;
        }
        console.log(this.error);
      }
    );
  }
}
