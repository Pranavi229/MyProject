import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../../service/vendor-service.service';
import { Vendor } from '../vendor';
import { AuthServiceService } from '../../auth-service.service';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {


  vendorList: Vendor[];
  vendor: Vendor[];

  constructor(private vendorsService: VendorServiceService, private authservice: AuthenticationService) { }

  ngOnInit() {


    this.vendorsService.getAllVendors().subscribe(data => {
      this.vendorList = data;
      console.log(this.vendorList)

      //   this.vendorList.forEach(vendor => {
      // console.log(vendor.vid);
      //   if(vendor.vid) {

      //   }      
    });

  }

  decline(vname: string) {
    console.log("chesey itemdddddddddddddddddddddddddddddddddddddddddddddd")
    if (sessionStorage.getItem('id') != vname) {
      this.vendorsService.deleteVendor(vname).subscribe(data => { this.ngOnInit(); });


    }

    else {
      alert('Vendor cannot delete themself');
    }

    // removeFromVendor(name:string){
    //   console.log(sessionStorage.getItem('username'));
    //   console.log(name);
    //   if(sessionStorage.getItem('username') != name){
    //   this.httpService.removeVendor(name).subscribe(
    //     data =>{
    //       this.httpService.getAdminList().subscribe(
    //         data => {
    //           console.log(data);
    //           alert("Deleted successfully");
    //           this.adminList = data;
    //         }
    //       )
    //     }
    //   )
    //   }
    //   else{
    //     alert('Vendor cannot delete themself');
    //   }
    // }


  }
}
