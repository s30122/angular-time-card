import { Component, OnInit,NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Get_Login_Emp } from '../storage/store-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errMsg="必填項目";
  emp=Get_Login_Emp();

  registerForm=new FormGroup({
    txt_company_code:new  FormControl('',[Validators.required,Validators.pattern("[A-Z]{3}")]),
    txt_company_name:new  FormControl('',[Validators.required]),
    select_company_category:new  FormControl('',[Validators.required]),
    txt_store_name:new  FormControl('',[Validators.required]),
    txt_store_location:new  FormControl('',[Validators.required]),
    txt_boss_code:new  FormControl('',[Validators.required,Validators.minLength(6)]),
    txt_boss_password:new  FormControl('',[Validators.required,Validators.minLength(6)]),
    txt_boss_name:new  FormControl('',[Validators.required]),
    txt_boss_birthday:new  FormControl('',[Validators.required]),
    txt_boss_email:new  FormControl('',[Validators.required,Validators.email]),
    txt_boss_phone:new  FormControl('',[Validators.required]),
  });
  categories=[{id:1,name:'餐飲業'},{id:2,name:'服務業'},{id:3,name:'金融業'},];
  constructor() { }

  ngOnInit() {
  }
   get txt_company_code() { return this.registerForm.get('txt_company_code'); }
   get txt_company_name() { return this.registerForm.get('txt_company_name'); }
   get select_company_category() { return this.registerForm.get('select_company_category'); }
   get txt_store_name() { return this.registerForm.get('txt_store_name'); }
   get txt_store_location() { return this.registerForm.get('txt_store_location'); }
   get txt_boss_code() { return this.registerForm.get('txt_boss_code'); }
   get txt_boss_password() { return this.registerForm.get('txt_boss_password'); }
   get txt_boss_name() { return this.registerForm.get('txt_boss_name'); }
   get txt_boss_birthday() { return this.registerForm.get('txt_boss_birthday'); }
   get txt_boss_email() { return this.registerForm.get('txt_boss_email'); }
   get txt_boss_phone() { return this.registerForm.get('txt_boss_phone'); }
   errMsg_required(){
     return this.errMsg;
   }
   errMsg_pattern_3character(){
     this.registerForm.invalid
    return "3個大寫英文單字";
  }
  errMsg_min(){
    return "最少請輸入6字元";
  }
  errMsg_email(){
    return "email格式";
  }
  onSubmit(){
    alert(this.registerForm.value);
  }
}
