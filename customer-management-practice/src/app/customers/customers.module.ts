import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CustomerCardViewComponent } from '../customer-card-view/customer-card-view.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    CustomerCardViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
