import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../../service/vendor-service.service';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-menu',
  templateUrl: './vendor-menu.component.html',
  styleUrls: ['./vendor-menu.component.css']
})
export class VendorMenuComponent implements OnInit {


  vendors: Vendor[];
  isAdmin: boolean;

  constructor(private _vendor: VendorServiceService, private _authService: AuthenticationService, private router: Router) { }


  ngOnInit() {

    this._vendor.getAllVendors().subscribe(data => {
      this.vendors = data;
      //console.log("data ->");
      console.log(this.vendors);
      this._vendor.getSubject().subscribe((data) => {
        this.vendors = data;

      });
    })

  }

}