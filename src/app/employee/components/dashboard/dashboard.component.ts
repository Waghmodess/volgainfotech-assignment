import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public employeeForm: FormGroup;
  private employeeObject = new Employee();
  public employeeData: Employee[] = [];
  public emailFilter: string = '';
  public employees: Employee[] = [];

  constructor(private formBuilder: FormBuilder, private service: EmployeeService, private router: Router) { }

  public ngOnInit(): void {
    this.getEmployeeData();
    this.getStaticEmployees();
    this.employeeForm = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      phone: [''],
      address: ['']
    });
  }

  private getEmployeeData(): void {
    this.service.getEmployees().subscribe((res: any) => {
      this.employeeData = res;
    }, err => {
      console.log(err);
    });
  }

  public addEmployee(): void {
    this.employeeObject.name = this.employeeForm.value.name;
    this.employeeObject.email = this.employeeForm.value.email;
    this.employeeObject.phone = this.employeeForm.value.phone;
    this.employeeObject.address = this.employeeForm.value.address;
    this.service.createEmployee(this.employeeObject).subscribe(res => {
      this.getEmployeeData();
      this.employeeForm.reset();
    }, err => {
      console.log(err);
    });
  }

  public deleteEmployee(emp: Employee): void {
    this.service.deleteEmployee(emp.id).subscribe(res => { });
    this.getEmployeeData();
  }

  public getElementById(id: number): void {
    this.service.getEmployeeById(id).subscribe((employee: Employee) => {
      this.router.navigate(['/employees', id]);
    }, err => {
      console.log(err);
    });
  }

  public getStaticEmployees(): void {
    this.employees = this.service.getAllStaticEmployees();
  }
}
