import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { UserserviceService } from '../site/service/userservice.service';
import { Vendor } from '../site/vendor/vendor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-vendor',
  templateUrl: './register-vendor.component.html',
  styleUrls: ['./register-vendor.component.css']
})
export class RegisterVendorComponent implements OnInit {

  signUpFormVen: FormGroup;
  vendor: Vendor
  error: string;
  userCreated: boolean = null;





  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserserviceService) { }

  ngOnInit() {

    this.signUpFormVen = this.formBuilder.group({
      nov: ['', [
        Validators.required,
        this.isnovTaken,
        Validators.maxLength(50),
        Validators.minLength(1)
      ]],
      comp: ['', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(1)
      ]],
      vendortype: ['', [
        Validators.required
      ]],
      address: ['', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(1)
      ]],
      country: ['', [
        Validators.required
      ]],
      state: ['', [
        Validators.required
      ]],
      ea: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      cn: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(12),
        Validators.minLength(1)
      ]],
      ws: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      cid: ['', [
        Validators.required
      ]],
      cvd: ['', [
        Validators.required
      ]],
      yoe: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      pay: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]]
    })
  }



  get nov() {
    return this.signUpFormVen.get('nov');
  }
  get comp() {
    return this.signUpFormVen.get('comp');
  }
  get vendortype() {
    return this.signUpFormVen.get('vendortype');
  }
  get address() {
    return this.signUpFormVen.get('address');
  }
  get country() {
    return this.signUpFormVen.get('country');
  }
  get state() {
    return this.signUpFormVen.get('state');
  }
  get ws() {
    return this.signUpFormVen.get('ws');
  }
  get cn() {
    return this.signUpFormVen.get('cn');
  }
  get ea() {
    return this.signUpFormVen.get('ea');
  }
  get cid() {
    return this.signUpFormVen.get('cid');
  }
  get cvd() {
    return this.signUpFormVen.get('cvd');
  }
  get yoe() {
    return this.signUpFormVen.get('yoe');
  }
  get password() {
    return this.signUpFormVen.get('password');
  }
  get pay() {
    return this.signUpFormVen.get('pay');
  }

  isnovTaken(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'admin') {
      return { 'novTaken': true };
    } else {
      return null;
    }
  }

  addVendor() {

    console.log(this.signUpFormVen.value['firstname']);
    this.vendor = { vname: this.signUpFormVen.value['nov'], regno: this.signUpFormVen.value['comp'], vendor_type: this.signUpFormVen.value['vendortype'], address: this.signUpFormVen.value['address'], country: this.signUpFormVen.value['country'], state: this.signUpFormVen.value['state'], email_address: this.signUpFormVen.value['ea'], contact_no: this.signUpFormVen.value['cn'], website: this.signUpFormVen.value['ws'], cer_Issued_Date: this.signUpFormVen.value['cid'], certificate_Validity_date: this.signUpFormVen.value['cvd'], year_of_Establishment: this.signUpFormVen.value['yoe'], password: this.signUpFormVen.value['password'], pay: this.signUpFormVen.value['pay'], vid: null, status: false };
    this.userService.addVendor(this.vendor).subscribe(data => {
      this.userCreated = true;
      this.userService.userCreated = true;
      this.error = "Vendor registered successfully"
      console.log(this.userCreated)
      this.router.navigate(['/login']);

    },
      error => {
        console.log("error")
        if (error.status == 400) {
          this.error = "Name of the Vendor Already Exists";
          this.userCreated = false;
        }
        console.log(this.error);
      }
    );
  }
}
