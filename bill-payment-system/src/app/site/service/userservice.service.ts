import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../User/User';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor/vendor';
import { Customer } from '../vendor/customer/Customer';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  url: string = environment.baseUrl;
  userCreated: boolean = false;

  constructor(private router: Router, private _httpClient: HttpClient) { }

  addVendor(vendor: Vendor): Observable<any> {
    //this.userList.push(user);
    console.log("Inside add user of service ")
    console.log(vendor)
    return this._httpClient.post<any>(this.url + "vendor-service/users/vendor", vendor)

    this.router.navigate(['login']);
  }

  addCustomer(customer: Customer): Observable<any> {
    //this.userList.push(user);
    console.log("Inside add user of service ")
    console.log(customer);
    return this._httpClient.post<any>(this.url + "vendor-service/users/customer", customer)
    this.router.navigate(['login']);
  }


}
