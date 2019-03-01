
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {Router} from '@angular/router';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Component({  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {
  data: any = new Array(' ');
  constructor(private fb: FormBuilder, private router: Router , private localStorage: LocalStorage) {
    localStorage.getItem('user').subscribe((data) => {
      this.data = data;


    });
    this.createForm();
  }

  public loginForm: FormGroup;

  loading = false;
  submitted = false;

  ngOnInit(): void {
  }

  createForm() {
    this.loginForm = this.fb.group({

      userId: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    /*for ( let index = 0; index < this.data.length; index++) {
      console.log(this.data[index].name);
    }*/
    console.log(this.loginForm.value);
    this.router.navigate(['homePage']);
  }
  signUp() {


    this.router.navigate(['signup']);
  }
}
