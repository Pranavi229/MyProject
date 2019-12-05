import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpClient: HttpClient, public router: Router) { }

  loggedInUser = { loggedOut: true };
  validCredentials: boolean = true;
  accessToken: string;
  redirectUrl = '/';
  loggedIn: boolean = false;
  private authenticationApiUrl = environment.baseUrl;
  private token: string;
  username: string;
  isCheckAdmin: boolean = false;
  isCheckVendor: boolean = false;
  isCheckCustomer: boolean = false;
  userId: number = 0;
  public getUserName() {
    return this.username;
  }

  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  public setUserId() {
    let sum: number = 0;
    for (let i = 0; i < this.username.length; i++) {
      this.userId = this.username.charCodeAt(i) + this.userId;
    }
  }
  authenticate(user: string, password: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(user + ':' + password));
    return this._httpClient.get(this.authenticationApiUrl + "authentication-service/authenticate", { headers })
  }

  logout() {
    this.loggedIn = false;
    this.setToken(null);
    this.userId = null;
  }

}
