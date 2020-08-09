import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../customer';
import { Router } from '@angular/router';
import { ModalDeleteCustomerComponent } from '../modal-delete-customer/modal-delete-customer.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-customer-card-view',
  templateUrl: './customer-card-view.component.html',
  styleUrls: ['./customer-card-view.component.scss']
})
export class CustomerCardViewComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showCustomers();
  }

  private showCustomers(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }

  goToDetails(id: any): void{
    this.router.navigate([`/customer-details/${id}`]);
  }

  addCustomer(): void {
    this.router.navigate(['add-customer']);
  }

  deleteCustomer(id: any): void {
    this.dialog.open(ModalDeleteCustomerComponent);
  }
}
