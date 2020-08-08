import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customer: Customer;
  customerForm: FormGroup;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private customerService: CustomerService
  ) {
    this.initForm();
   }

  ngOnInit(): void {
  }


  private initForm(): void {
    this.customerForm = this.formBuilder.group({
      id: new FormControl(),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      phone: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required)
    });
  }

  goBack(): void {
    this.router.navigate(['customers']);
  }

  onSubmit(customerForm): void {
    this.customerService.addCustomer(customerForm.value).subscribe();
    this.router.navigate(['customers']);
  }
}
