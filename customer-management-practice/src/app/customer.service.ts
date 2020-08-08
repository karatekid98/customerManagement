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

  getCustomers(): Observable<Customer[]>  {
    return this.http.get<Customer[]>('https://5f242f363b9d3500162040f3.mockapi.io/api/data/Customers');
  }

  getOneCustomer(id: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`https://5f242f363b9d3500162040f3.mockapi.io/api/data/Customers/${id}`);
  }

  updateOneCutomer(customerform: Customer, id: any): Observable<Customer> {
    return this.http.put<Customer>(`https://5f242f363b9d3500162040f3.mockapi.io/api/data/Customers/${id}`, customerform);
  }
  addCustomer(customerform: Customer): Observable<Customer> {
    return this.http.post<Customer>('https://5f242f363b9d3500162040f3.mockapi.io/api/data/Customers/', customerform);
  }
}
