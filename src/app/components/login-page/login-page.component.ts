import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../../services/user-service/user.service"

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private userService:UserService
  ) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  get f() { return this.loginForm.controls; }

  async onSubmit() {
      this.submitted = true;

      if (this.loginForm.invalid) {
          return;
      }
      //this.loading = true;
      let body = {
        userName: this.f.username.value,
        password:this.f.password.value
      }
      this.userService.userLogin(body)      
    }  
}