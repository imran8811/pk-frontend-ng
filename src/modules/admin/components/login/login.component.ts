import { Component, OnInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { AdminAuthService  } from 'src/services';

@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class AdminLoginComponent implements OnInit {
  adminLoginForm: FormGroup = this.fb.group({
    'email' : ['', Validators.required],
    'password' : ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private adminAuthService: AdminAuthService,
    ) { }

  get form() { return this.adminLoginForm.controls }

  ngOnInit(): void {}

  onSubmit = () => {
    const data = {
      email : this.form['email'].value,
      password : this.form['password'].value
    }
    const res = this.adminAuthService.adminLogin(data).subscribe(res => {
      if(res?.type === 'success'){
        const userData = {
          token : res.token,
          name : res.user.name
        }
        localStorage.setItem('userData', JSON.stringify(userData))
        this.router.navigate(['/admin/add-product'])
      }
    })
  }
  
}
