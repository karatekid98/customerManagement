import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../customer';
@Component({
  selector: 'app-customer-card-view',
  templateUrl: './customer-card-view.component.html',
  styleUrls: ['./customer-card-view.component.scss']
})
export class CustomerCardViewComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.showCustomers();
  }

  private showCustomers(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers.data;
    });
  }
}
