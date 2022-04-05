import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginId: string = "";
  password: string = "";

  constructor(
    private emplsvc: EmployeeService
  ) { }

  submit(): void {
    this.emplsvc.login(this.loginId, this.password).subscribe({
      next: (res) => {
        console.log("Login successful!");
      },
      error: (err) => {
        console.error("Login unsuccessful!");
      }
    });
  }

  ngOnInit(): void {
  }

}
