import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  public signUpData: any = [' '];
  constructor(private fb: FormBuilder, private router: Router , private localStorage: LocalStorage) {
  this.createForm();  }

  ngOnInit() {
  }

  createForm() {
    this.signUpForm = this.fb.group({

      name : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      EmailId : ['', [Validators.required, Validators.email ]],
      mobileNo : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password : [ '' , [Validators.required, Validators.minLength(6)]],
      type : ['', [Validators.required]]
    });
  }
  //

  onSubmit() {
    this.signUpData.push(this.signUpForm.value);
    this.localStorage.setItem('user', this.signUpData).subscribe(() => {});
    this.router.navigate(['login']);
  }
}
