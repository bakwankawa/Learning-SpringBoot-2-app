import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    private apiServerUrl = '';

    constructor(private http: HttpClient) { }

    public getEmployees(): Observable<Employee[]> {     // <Employee[]> pass the class from Employee to be returned from this method
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
    }

    public addEmployee(employee: Employee): Observable<Employee> {      // take the actual employee we're adding and return one employee
                                                                        // because no bracket []
        return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);     // pass the payload employee as second argument
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
    }

    public deleteEmployee(employeeId: number): Observable<void> {
        return this.http.post<Employee>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }
}