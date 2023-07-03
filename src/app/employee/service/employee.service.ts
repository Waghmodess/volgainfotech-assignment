import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>("http://localhost:3000/employee/");
  }

  createEmployee(data: Employee): Observable<Employee> {
    return this.http.post<Employee>("http://localhost:3000/employee/", data);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>("http://localhost:3000/employee/" + id);
  }

  getEmployeeById(id: any): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:3000/employee/${id}`);
  }
}
