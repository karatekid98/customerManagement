import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  constructor(private customerService: CustomerService) {}
  customers: Customer[];
  ngOnInit(): void {
    this.showCustomers();
  }

  private showCustomers(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers.data;
    });
  }
}
