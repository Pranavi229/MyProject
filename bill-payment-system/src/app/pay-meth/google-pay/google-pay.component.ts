import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-pay',
  templateUrl: './google-pay.component.html',
  styleUrls: ['./google-pay.component.css']
})
export class GooglePayComponent implements OnInit {


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
      uid: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]*$"),
        Validators.minLength(1),
        Validators.maxLength(50),
      ]]
    })
  }
  get cname() {
    return this.payForm.get('cname');
  }
  get uid() {
    return this.payForm.get('uid');
  }
  submit() {
    this.router.navigate(['']);
  }
  pay() {
    alert('PAYEMENT SUCCESSFULL')
    this.router.navigate(['s']);
  }

}
