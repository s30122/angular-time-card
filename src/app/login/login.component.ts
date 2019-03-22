import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {Employees} from '../mock-employees';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Login } from './login.actions';
import { Set_Login_Emp } from '../storage/store-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:Employee;

  constructor(private router:Router) {
    this.model=Employees[0];
   }

  ngOnInit() {
  }
  reset(){
    this.model.code='';
    this.model.password='';
  }
  login(){
   var login_emp= Employees.find(x=>x.code=== this.model.code);
    if(login_emp){
      if(login_emp.password===this.model.password){
        Set_Login_Emp(login_emp);
        this.router.navigate(['/dashboard'])
      }else{
        alert('密碼錯誤');
      }
    }else{
      alert('無此帳號');
    }
  }

}
