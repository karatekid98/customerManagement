
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CustomersComponent } from './customers.component';
import { CustomerService } from '../customer.service';
import { CustomerDetailsComponent } from './customer-card-view/customer-details/customer-details.component';
import { CustomerCardViewComponent } from './customer-card-view/customer-card-view.component';
import { ModalDeleteCustomerComponent } from './modal-delete-customer/modal-delete-customer.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    CustomerCardViewComponent,
    ModalDeleteCustomerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomersComponent
  ],
  providers: [CustomerService]
})
export class CustomersModule { }
