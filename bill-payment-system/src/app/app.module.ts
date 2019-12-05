import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './site/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterVendorComponent } from './register-vendor/register-vendor.component';
import { UserSearchComponent } from './search/user-search/user-search.component';
import { VendorInfoComponent } from './site/vendor/vendor-info/vendor-info.component';
import { VendorMenuComponent } from './site/vendor/vendor-menu/vendor-menu.component';
import { ElectricityComponent } from './billtype/electricity/electricity.component';
import { DthComponent } from './billtype/dth/dth.component';
import { LoanaccountComponent } from './billtype/loanaccount/loanaccount.component';
import { InsuranceComponent } from './billtype/insurance/insurance.component';
import { TelephoneComponent } from './billtype/telephone/telephone.component';
import { TaxComponent } from './billtype/tax/tax.component';
import { OthersComponent } from './billtype/others/others.component';
import { CreditcardComponent } from './billtype/creditcard/creditcard.component';

import { ViewComponent } from './admin/view/view.component';
import { AdminComponent } from './admin/admin/admin.component';
import { VendorComponent } from './site/vendor/vendor/vendor.component';
import { CustomerComponent } from './customer/customer.component';
import { GooglePayComponent } from './pay-meth/google-pay/google-pay.component';
import { CreditDebitComponent } from './pay-meth/credit-debit/credit-debit.component';
import { EWalletComponent } from './pay-meth/e-wallet/e-wallet.component';
import { NetBankingComponent } from './pay-meth/net-banking/net-banking.component';
import { PaytmComponent } from './pay-meth/paytm/paytm.component';
import { VendorEditComponent } from './site/vendor/vendor-edit/vendor-edit.component';
import { HelpComponent } from './help/help/help.component';
import { RegisterComponent } from './sign-up/register/register.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'rc', component: RegisterCustomerComponent },
  { path: 'rv', component: RegisterVendorComponent },
  { path: 's', component: UserSearchComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'vendori', component: VendorInfoComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'view/:vname', component: ViewComponent },
  { path: 'edit/:vname', component: VendorEditComponent },
  { path: 'electricity', component: ElectricityComponent },
  { path: 'Credit/Debit Card', component: CreditDebitComponent },
  { path: 'Internet Banking', component: NetBankingComponent },
  { path: 'PayTm', component: PaytmComponent },
  { path: 'e-wallet', component: EWalletComponent },
  { path: 'Google Pay', component: GooglePayComponent },
  { path: 'help', component: HelpComponent },
  { path: 'register', component: RegisterComponent }







];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterCustomerComponent,
    RegisterVendorComponent,
    UserSearchComponent,
    VendorInfoComponent,
    VendorMenuComponent,
    ElectricityComponent,
    DthComponent,
    LoanaccountComponent,
    InsuranceComponent,
    TelephoneComponent,
    TaxComponent,
    OthersComponent,
    CreditcardComponent,
    AdminComponent,
    ViewComponent,
    VendorInfoComponent,
    VendorComponent,
    CustomerComponent,
    GooglePayComponent,
    CreditDebitComponent,
    EWalletComponent,
    NetBankingComponent,
    PaytmComponent,
    VendorEditComponent,
    HelpComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
