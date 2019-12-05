import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { UserserviceService } from '../service/userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'bill-payment-system';

  loginForm: FormGroup
  userCreated: boolean = null;
  constructor(private formBuild: FormBuilder, private authService: AuthenticationService, private router: Router, private userService: UserserviceService) { } //Remember authservice was AuthServiceService

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  getUsername() {
    return this.loginForm.value['username'];
  }

  getPassword() {
    return this.loginForm.value['password'];
  }


  toRc() {
    this.router.navigate(['register'])
  }

  toRv() {
    this.router.navigate(['rv'])
  }

  toS() {
    this.router.navigate(['s'])
  }

  invalidLogin: boolean;
  error: string = "Login Failed"


  onSubmit() {
    this.authService.authenticate(this.getUsername(), this.getPassword()).subscribe(
      data => {
        console.log(data);
        this.authService.setToken(data.token);
        this.error = "Logged In successfully";
        this.authService.username = this.getUsername();
        this.authService.loggedIn = true;
        this.authService.loggedIn = true;
        this.authService.validCredentials = true;
        this.authService.setUserId();
        console.log("useod " + this.authService.userId)
        if (data.role == "admin")
          this.authService.isCheckAdmin = true;
        this.router.navigate(['/admin'])
        if (data.role == "vendor") {
          this.authService.isCheckVendor = true;

          this.router.navigate(['/vendor'])
        }
        if (data.role == "customer") {
          this.authService.isCheckCustomer = true;
          this.router.navigate(['/s'])
        }





        //this.foodService.isAdmin = false;
        console.log(data.role);

        console.log(data.token);
        console.log(data.role);
        this.userCreated = true;

      },
      error => {
        this.authService.validCredentials = false;
        this.invalidLogin = true
        if (error.status == 401)
          this.error = "Invalid Username or Password";
        console.log(error);
      }
    );
  }
}