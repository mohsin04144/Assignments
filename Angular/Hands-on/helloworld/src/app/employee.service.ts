import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { IEmployee } from './employee';
@Injectable()
export class EmployeeService {
  private _url: string = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

}