import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-find-password',
  templateUrl: './find-password.component.html',
  styleUrls: ['./find-password.component.css']
})
export class FindPasswordComponent implements OnInit {
  findPwdForm = new FormGroup({
    txt_code: new FormControl(''),
    txt_email: new FormControl(''),
    chk_mode: new FormControl(''),
    txt_parentCode: new FormControl(''),
  })
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }
  onSubmit() {
    let msg = '';
    if (this.findPwdForm.value.chk_mode) {
      msg += `已請主管[${this.findPwdForm.value.txt_parentCode}]發送預設密碼到 ${this.findPwdForm.value.txt_email}`
    } else {
      msg = `已發送預設密碼到 ${this.findPwdForm.value.txt_email} `
    }
    alert(msg);
    this.gotoPrevious();
  }
  gotoPrevious() {
    this.location.back();
  }

}
