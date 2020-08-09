import { Component, OnInit, Input, Inject } from '@angular/core';
import { CustomerCardViewComponent } from '../customer-card-view.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from '../../../customer.service';



@Component({
  selector: 'app-modal-delete-customer',
  templateUrl: './modal-delete-customer.component.html',
  styleUrls: ['./modal-delete-customer.component.scss']
})
export class ModalDeleteCustomerComponent implements OnInit {
  public id: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  deleteCustomer(id: any): void {
    this.customerService.deleteCustomer(id).subscribe();
  }
}
