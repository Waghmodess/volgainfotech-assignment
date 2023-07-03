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

  private staticEmployeesData: Employee[] = [
    {
      "name": "James",
      "email": "james@gmail.com",
      "phone": 8584833432,
      "address": "Pune, India",
      "id": 1
    },
    {
      "name": "Clara",
      "email": "clara@gmail.com",
      "phone": 9983423854,
      "address": "Mumbai, India",
      "id": 2
    },
    {
      "name": "Wayne",
      "email": "wayne@gmail.com",
      "phone": 4348242792,
      "address": "Delhi, India",
      "id": 3
    },
    {
      "name": "Maya",
      "email": "maya@gmail.com",
      "phone": 9876543210,
      "address": "Pune, India",
      "id": 4
    }
  ];

  public getAllStaticEmployees(): Employee[] {
    return [...this.staticEmployeesData];
  }
}
