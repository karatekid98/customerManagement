import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { ApiResponse } from './api-response-model';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ApiResponse<Customer[]>>  {
    return this.http.get<ApiResponse<Customer[]>>('https://customers.free.beeceptor.com/my/api/path/GetAllCustomers');
  }

}
