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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { CustomerCardViewComponent } from './customers/customer-card-view/customer-card-view.component';
import { CustomerService } from './customer.service';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ToolbarComponent,
    CustomerCardViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [AuthGuardService, LocalStorageService, AuthGuard, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
