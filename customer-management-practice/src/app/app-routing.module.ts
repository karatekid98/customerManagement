import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustomersComponent } from './customers/customers.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthGuardService } from './auth/auth-guard.service';
import { CustomerDetailsComponent } from './customers/customer-card-view/customer-details/customer-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'customers', canActivate: [AuthGuard], component: CustomersComponent},
  { path: 'customer-details/:id',  component: CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthGuardService]
})
export class AppRoutingModule { }
