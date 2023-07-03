import { Component } from '@angular/core';
import { Employee } from '../../model/employee';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  public employee: Employee | null = null;

  constructor(private route: ActivatedRoute, private service: EmployeeService, private router: Router) { }

  public ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        return this.service.getEmployeeById(id);
      })
    ).subscribe((employee: Employee | null) => {
      this.employee = employee;
    }, err => {
      console.log(err);
    });
  }

  navigateToDashboard() {
    this.router.navigate(['']);
  }
}