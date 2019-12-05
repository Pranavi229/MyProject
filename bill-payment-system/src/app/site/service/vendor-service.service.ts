import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthenticationService } from './authentication.service';
import { Subject, Observable } from 'rxjs';


import { environment } from 'src/environments/environment';
import { Vendor } from '../vendor/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  /*  vendorList: Vendor[] *//*= [
      {vname:"abc",
      regno:"abc",
      vendor_type:"dth",
        address:"abc",
        country:"abc",
        state:"abc",
        email_address:"abc",
        contact_no:123,
        website:"abc",
        cer_Issued_Date:new Date("12/11/2015"),
        certificate_Validity_date:new Date("12/12/2015"),
        year_of_Establishment:new Date("12/11/2012"),
        password:"abc",
        status:true,
        vid:1,
        pay:"gpay"},
  
        {vname:"abcd",
        regno:"abcd",
        vendor_type:"electricity",
        address:"abcd",
        country:"abcd",
        state:"abcd",
        email_address:"abcd",
        contact_no:123,
        website:"abcd",
        cer_Issued_Date:new Date("12/11/2015"),
        certificate_Validity_date:new Date("12/12/2015"),
        year_of_Establishment:new Date("12/11/2012"),
        password:"abcd",
        status:false,
        vid:2,
        pay:"rgh"
      }
    ]*/
  isAdmin: boolean = false;
  addedToCart: boolean = false;
  cartAddedId: number;
  isLoggedIn: boolean = false;
  clickedOnAdd: boolean = false;
  private subject = new Subject<Vendor[]>();
  url = environment.baseUrl;


  constructor(private _httpClient: HttpClient, private _authService: AuthenticationService) { }


  /*for search*/
  getSubject(): Subject<Vendor[]> {
    return this.subject;
  }

  /*for search*/
  public getAllVendors(): Observable<any> {
    let headers = new HttpHeaders();
    // console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());

    return this._httpClient.get<Vendor[]>(this.url + "vendor-service/vendors", { headers });

  }

  public deleteVendor(username: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.delete(this.url + "vendor-service/vendors/" + username, { headers })
  }

  public statusVendor(vendor: Vendor): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log("in acceeeeeeeeeeeeeeeptt hhhhhhhh55555555555555555555hhhhhhhhhhhhhhhhhhh")
    console.log(vendor);
    return this._httpClient.put(this.url + "vendor-service/vendors/", vendor, { headers })
  }

  getVendorname(nov: string): Observable<any> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log("vendor name requested" + nov);
    return this._httpClient.get<Vendor>(this.url + "vendor-service/vendors/" + nov, { headers });
  }

  save(vendor: Vendor): Observable<any> {

    console.log(vendor);
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + " authservice");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log("change the menuitem");
    return this._httpClient.put<Vendor>(this.url + "vendor-service/vendors/edit", vendor, { headers })
  }







}
