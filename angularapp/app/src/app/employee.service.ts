import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL="http://127.0.0.1:8005/api/v1/employees";
  constructor(private httpClient:HttpClient) { }
  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id:number , employee:Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
