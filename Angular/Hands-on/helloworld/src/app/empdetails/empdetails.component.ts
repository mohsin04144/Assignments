import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-details',
  template: `
    <h2>Employee Detail</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee['id']}}. {{employee['name']}} - {{employee['age']}}</li>
    </ul>
  `,
  styles: []
})
export class EmpDetailsComponent implements OnInit {

  public employees:any= [];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
  }

}