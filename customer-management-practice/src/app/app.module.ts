import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './auth/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './login-page/login-page.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageService } from './local-storage.service';
import { AuthGuard } from './auth/auth.guard';
import { ReactiveFormsModule, NgForm, FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers/customers.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


import { CustomerCardViewComponent } from './customers/customer-card-view/customer-card-view.component';
import { CustomerService } from './customer.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomerTableViewComponent } from './customers/customer-table-view/customer-table-view.component';
import { CustomerDetailsComponent } from './customers/customer-card-view/customer-details/customer-details.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { ModalDeleteCustomerComponent } from './customers/customer-card-view/modal-delete-customer/modal-delete-customer.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { Translate } from './translate.service';
import { CustomerMapViewComponent } from './customers/customer-map-view/customer-map-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ToolbarComponent,
    CustomerCardViewComponent,
    CustomerTableViewComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    ModalDeleteCustomerComponent,
    CustomerMapViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [AuthGuardService, LocalStorageService, AuthGuard, CustomerService, Translate],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
