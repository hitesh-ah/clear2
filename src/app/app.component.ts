import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  addNewEmployee: boolean = false;
  onAddNewEmployee() {
    this.addNewEmployee = !this.addNewEmployee;
  }
}
