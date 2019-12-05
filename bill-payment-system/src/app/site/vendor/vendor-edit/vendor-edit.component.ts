import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor';
import { UserserviceService } from '../../service/userservice.service';
import { VendorServiceService } from '../../service/vendor-service.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  signUpFormVen: FormGroup;
  vendor: Vendor
  error: "Successfully saved your details";
  userCreated: boolean = null;
  editdone: boolean = false;






  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private userService: UserserviceService, private vendorsService: VendorServiceService) { }

  ngOnInit() {
    const vendorname = this.route.snapshot.paramMap.get('vname');
    this.vendorsService.getVendorname(vendorname).subscribe(data => {
      // data.dateOfLaunch = new Date(data.dateOfLaunch)
      this.vendor = data;

      this.signUpFormVen = this.formBuilder.group({
        nov: [this.vendor.vname, [
          Validators.required,
          this.isnovTaken,
          Validators.maxLength(50),
          Validators.minLength(1)
        ]],
        comp: [this.vendor.regno, [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(1)
        ]],
        vendortype: [this.vendor.vendor_type, [
          Validators.required
        ]],
        address: [this.vendor.address, [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(1)
        ]],
        country: [this.vendor.country, [
          Validators.required
        ]],
        state: [this.vendor.state, [
          Validators.required
        ]],
        ea: [this.vendor.email_address, [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(1)
        ]],
        cn: [this.vendor.contact_no, [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.maxLength(12),
          Validators.minLength(1)
        ]],
        ws: [this.vendor.contact_no, [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(1)
        ]],
        cid: [this.vendor.cer_Issued_Date, [
          Validators.required
        ]],
        cvd: [this.vendor.certificate_Validity_date, [
          Validators.required
        ]],
        yoe: [this.vendor.year_of_Establishment, [
          Validators.required
        ]],
        password: [this.vendor.password, [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(1)
        ]],
        pay: [this.vendor.pay, [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(1)
        ]]
      })
    });




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

  editVendor() {

    this.vendor = { vid: this.vendor.vid, vname: this.signUpFormVen.value['nov'], regno: this.signUpFormVen.value['comp'], vendor_type: this.signUpFormVen.value['vendortype'], address: this.signUpFormVen.value['address'], country: this.signUpFormVen.value['country'], state: this.signUpFormVen.value['state'], email_address: this.signUpFormVen.value['ea'], contact_no: this.signUpFormVen.value['cn'], website: this.signUpFormVen.value['ws'], cer_Issued_Date: this.signUpFormVen.value['cid'], certificate_Validity_date: this.signUpFormVen.value['cvd'], year_of_Establishment: this.signUpFormVen.value['yoe'], password: this.signUpFormVen.value['password'], pay: this.signUpFormVen.value['pay'], status: this.vendor.status };


    this.vendorsService.save(this.vendor).subscribe();
    this.editdone = true;




  }
}
