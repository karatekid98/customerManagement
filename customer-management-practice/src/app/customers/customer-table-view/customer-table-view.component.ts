import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../customer';
@Component({
  selector: 'app-customer-table-view',
  templateUrl: './customer-table-view.component.html',
  styleUrls: ['./customer-table-view.component.scss']
})
export class CustomerTableViewComponent implements OnInit {
  customers: Customer[];
  dataSource;

  displayedColumns: string[] = ['name', 'address', 'email', 'birthDate', 'phone'];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.showCustomers();
  }

  private showCustomers(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.dataSource = customers;
    });
  }
}
