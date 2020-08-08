import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../customer.service';
import { Customer } from 'src/app/customer';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  public id: any;
  customer: Customer;
  customerForm: FormGroup;
  constructor(
    private customerService: CustomerService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.initForm();
  }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.customerService.getOneCustomer(this.id).subscribe((customer) => {
      this.customerForm.patchValue(customer);
    });
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

  onSubmit(): void {
    this.customerService.updateOneCutomer(this.customerForm.value, this.id).subscribe();
    this.router.navigate(['/customers']);
  }

  goBack(): void {
    this.router.navigate(['/customers']);
  }

}
