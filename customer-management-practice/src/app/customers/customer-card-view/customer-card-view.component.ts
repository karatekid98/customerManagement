import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../customer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-card-view',
  templateUrl: './customer-card-view.component.html',
  styleUrls: ['./customer-card-view.component.scss']
})
export class CustomerCardViewComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService, private router: Router) { }

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

  }
}
