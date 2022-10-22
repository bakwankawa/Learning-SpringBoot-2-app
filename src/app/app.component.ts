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

  /*
  This function is according to https://getbootstrap.com/docs/5.1/components/modal/.
  And this button is only available in typescript only, to make this button appear
  in html we need to access the container from html main div and call deriven 'click'
  object that we derivate from this function.
   */
  public onOpenModal(mode: string, employee?: Employee): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#editEmployeeModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
