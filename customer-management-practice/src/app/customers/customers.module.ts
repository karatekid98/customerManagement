import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CustomerCardViewComponent } from '../customer-card-view/customer-card-view.component';
import { CustomersComponent } from './customers.component';
import { CustomerService } from '../customer.service';

@NgModule({
  declarations: [
    ToolbarComponent,
    CustomerCardViewComponent
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
