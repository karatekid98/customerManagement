import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../customer.service';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  public id: any;
  customer: Customer = {
    firstName: '',
    lastName: '',
    address: '',
    birthDate: new Date,
    phone: '',
    email: ''
  };
  constructor(
    private customerService: CustomerService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.customerService.getOneCustomer(this.id).subscribe((customer) => {
      this.customer = customer;
      console.log(this.customer);
    });
  }
}
