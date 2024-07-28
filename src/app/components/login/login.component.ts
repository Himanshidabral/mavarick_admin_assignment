import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlertService } from '../../Service/alert.service';
import { CommonService } from '../../Service/common.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  invalid: any = true;
  submitted = false;
  email: any;
  password: any;
  loginForm!: FormGroup;
  passwordVisible: boolean = false;

  constructor(
    private _route: Router,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private commonService:CommonService
  ) { }



  ngOnInit() {
    this.buildForm();
  }


  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }


  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted=true;
    if (this.loginForm.invalid) {

      return
    }
    const loginData = this.loginForm.value;

    this.commonService.login(loginData).subscribe((data: any) => {
      const accessToken = data.data.token;
      localStorage.setItem('token', accessToken)
      this._route.navigate(['/dashboard']);
      this.alert.success('Successfully login !')


    }, err => {
      console.log(err);
      this.alert.warning(err?.error?.data?.error?err?.error?.data?.error:err?.error?.message)
    });
    



  }

}
