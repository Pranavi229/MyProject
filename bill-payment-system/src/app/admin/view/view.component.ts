import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorServiceService } from 'src/app/site/service/vendor-service.service';
import { Vendor } from 'src/app/site/vendor/vendor';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  vendor: Vendor[];

  constructor(private vendorsService: VendorServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    console.log("fgfff")
    const vendorname = this.route.snapshot.paramMap.get('vname');
    this.vendorsService.getVendorname(vendorname).subscribe(data => {
      // data.dateOfLaunch = new Date(data.dateOfLaunch)
      this.vendor = data;
      console.log("ggggggggggggggggggggggggggggggggggggggggg", this.vendor)
      // this.router.navigate(['view']);

      // this.vendor.dateOfLaunch.setDate(this.vendor.dateOfLaunch.getDate());
    }
    );


  }





}
