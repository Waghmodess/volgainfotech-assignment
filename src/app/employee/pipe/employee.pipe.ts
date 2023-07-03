import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model/employee';

@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform {

  public transform(employees: Employee[], filterValue: string): Employee[] {
    if (!filterValue) {
      return employees;
    }
    const lowercaseFilterValue = filterValue.toLowerCase();
    return employees.filter(employee => employee.email.toLowerCase().includes(lowercaseFilterValue));
  }

}
