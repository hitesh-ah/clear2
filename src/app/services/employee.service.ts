import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [];
  private employeeSourcesURL = 'assets/employees_list.json'

  constructor(private _http: HttpClient) {}
  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.saveEmployeeList();
  }
  private saveEmployeeList() {
    const json = JSON.stringify(this.employees);
    this._http.put(this.employeeSourcesURL, json).subscribe(
      () => {
        console.log('Employee list saved successfully');
      },
      (error) => {
        console.error('Error saving employee list:', error);
      }
    );
  }
  getEmployees(): Observable<any[]> {
    return this._http.get<any[]>(this.employeeSourcesURL);
  }



  private writeJsonToFile(data: string): void {
    console.log('Data to be written:', data);
  }
}
