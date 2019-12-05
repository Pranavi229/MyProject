import { Component, OnInit } from '@angular/core';

import { VendorServiceService } from 'src/app/site/service/vendor-service.service';
import { Vendor } from 'src/app/site/vendor/vendor';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {



  searchKey: string;
  vendorList: Vendor[];
  filteredvendorList: Vendor[];
  isAdmin: boolean;

  constructor(private _vendor: VendorServiceService) { }

  ngOnInit() {


    this._vendor.getAllVendors().subscribe(data => {
      this.vendorList = data;
    })

    this.filteredvendorList = this.vendorList;


  }

  search() {

    this.filteredvendorList = this.vendorList.filter(item => item.vname.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()) || item.vendor_type.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()));
    this._vendor.getSubject().next(this.filteredvendorList);

    // this.filteredvendorList2 = this.vendorList.filter(item => item.vendor_type.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()));
    // this._vendor.getSubject().next(this.filteredvendorList2);
  }
}
