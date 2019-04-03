import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';
import {users} from '../mockData/users'
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:user;

  constructor(private router:Router) {
    this.model=users[0];
   }

  ngOnInit() {
  }
  reset(){
    this.model.code='';
    this.model.password='';
  }
  login(){
   var login_emp= users.find(x=>x.code=== this.model.code);
    if(login_emp){
      if(login_emp.password===this.model.password){
        
        this.router.navigate(['/dashboard'])
      }else{
        alert('密碼錯誤');
      }
    }else{
      alert('無此帳號');
    }
  }

}
