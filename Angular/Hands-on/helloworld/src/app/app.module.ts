import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpDetailsComponent } from './empdetails/empdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmplistComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
