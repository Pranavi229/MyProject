import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './site/service/authentication.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.loggedIn();

    this.router.navigate(['login']);
    //this.router.navigate(['search-bar']);
  }

  constructor(private authService: AuthenticationService, public router: Router) {
  }


  isLoggedIn: boolean = false;
  loggedIn(): boolean {
    if (this.authService.loggedIn) {
      this.isLoggedIn = true;
      return true
    }
    else {
      this.isLoggedIn = false;
      return false;
    }
  }

  title = 'bill-payment-system';
  clickOnAddCart() {
    this.router.navigate(['login']);
  }

  vendor() {
    this.router.navigate(['vendor']);
  }
  customer() {
    this.router.navigate(['s']);
  }
  help() {
    this.router.navigate(['help']);
  }

  clickOnRegister() {
    this.router.navigate(['register']);
  }


  admin() {
    this.router.navigate(['admin']);
  }



}