import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {// whenever it initialize will call getEmployees function
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}  // inject the service to this app component

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {   // this method return void
    this.employeeService.getEmployees().subscribe(    // this is to call service. Because this method is unobservable,
                                                      // then we call getEmployees from service that observable and
                                                      // using subscribe to notify to data what we get
      (response: Employee[]) => {  // if the response is Employees[]
        this.employees = response;  // it will give whatever response takes
      },
      (error: HttpErrorResponse) => {   // elif the response is error
        alert(error.message);
      }
    );
  }
}
