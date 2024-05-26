import { Component, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormControl } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Employee, Sample_employees } from '../models/employees';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'designation',
    'location',
    'status',
  ];
  dataSource = new MatTableDataSource<Employee>(Sample_employees);
  idList: any[] = [];
  designationList: any[] = [];
  locationList: any[] = [];
  filteredData: any[] = [];

  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.getIdData();
    this.getDesignationData();
    this.getLocationData();
  }

  addEmployee() {
    // this.employeeService.addEmployee(this.newEmployee).subscribe(
    //   () => console.log('Employee added successfully'),
    //   (error) => console.error('Error adding employee:', error)
    // );
  }

  getIdData() {
    this.dataSource.data.forEach((element) => {
      this.idList.push(element.id);
    });
  }
  getDesignationData() {
    this.dataSource.data.forEach((element) => {
      this.designationList.push(element.designation);
    });
  }
  getLocationData() {
    this.dataSource.data.forEach((element) => {
      this.locationList.push(element.location);
    });
  }

  filterId(input: string | any) {
    this.dataSource.filterPredicate = (data: Employee, f: string) =>
      !f || data.id == input.target.value;
    this.dataSource.filter = input.target.value;
  }
  filterDesignation(input: string | any) {
    this.dataSource.filterPredicate = (data: Employee, f: string) =>
      !f || data.designation == input.target.value;
    this.dataSource.filter = input.target.value;
  }
  filterLocation(input: string | any) {
    this.dataSource.filterPredicate = (data: Employee, f: string) =>
      !f || data.location == input.target.value;
    this.dataSource.filter = input.target.value;
  }
}
