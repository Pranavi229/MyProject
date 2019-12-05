import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-net-banking',
  templateUrl: './net-banking.component.html',
  styleUrls: ['./net-banking.component.css']
})
export class NetBankingComponent implements OnInit {

  payForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.payForm = this.formBuilder.group({
      cname: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]*$"),
        Validators.minLength(1),
        Validators.maxLength(50),
      ]],
      acnum: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(1),
        Validators.maxLength(20),
      ]],
      pass: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(16),
      ]]

    })
  }
  get cname() {
    return this.payForm.get('cname');
  }
  get acnum() {
    return this.payForm.get('acnum');
  } get pass() {
    return this.payForm.get('pass');
  }
  submit() {
    this.router.navigate(['']);
  }
  pay() {
    alert('PAYEMENT SUCCESSFULL')
    this.router.navigate(['s']);
  }


}
