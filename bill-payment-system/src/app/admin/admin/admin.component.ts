import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from 'src/app/site/service/vendor-service.service';
import { Vendor } from 'src/app/site/vendor/vendor';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/site/service/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  vendorList:Vendor[];
  vendor:Vendor[];

  empty: boolean = false;
  remove: boolean = false;
  constructor( private vendorsService : VendorServiceService,private route: ActivatedRoute,private router:Router,private authservice:AuthenticationService) { }

  ngOnInit() {

    this.vendorsService. getAllVendors().subscribe(data => {
      this.vendorList = data;
      console.log(this.vendorList)

  //   this.vendorList.forEach(vendor => {
  // console.log(vendor.vid);
  //   if(vendor.vid) {

  //   }      
    });
     
   
    
  }

  decline(id: string) {
    console.log("chesey item")
    this.vendorsService.deleteVendor(id).subscribe(data=>{  this.ngOnInit();});
    this.remove = true;
   
  }

  accept( vendorListA : Vendor) {

    console.log("in acceeeeeeeeeeeeeeeptt")
   
    vendorListA.status=true;
    console.log("in acceeeeeeeeeeeeeeeptt hhhhhhhhhhhhhhhhhhhhhhhhhhh")
    this.vendorsService.statusVendor(vendorListA).subscribe(data=>{  this.ngOnInit()
      
      ; 
  });






  }


  // viewVendor(){   
  //  // console.log("inside view ************************vendor"+nov);
  //   // const vendorname = this.route.snapshot.paramMap.get('nov');
  //   //   this.vendorsService.getVendorname(nov).subscribe(data => {
  //   //  // data.dateOfLaunch = new Date(data.dateOfLaunch)
  //   //   this.vendor = data;
  //     this.router.navigate(['/view']);
     
  //    // this.vendor.dateOfLaunch.setDate(this.vendor.dateOfLaunch.getDate());
  //     // }
  //     // );
  //   }


}
