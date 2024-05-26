import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _employeeService:EmployeeService
  ){
    this.employeeForm = this._fb.group({
      employeeId: ['', Validators.required],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      location: ['', Validators.required]
    });
  }
  addEmployee() {
    if (this.employeeForm.valid) {
      const newEmployee = this.employeeForm.value;
      this._employeeService.addEmployee(newEmployee);
      this.employeeForm.reset();
    }
  }

}
