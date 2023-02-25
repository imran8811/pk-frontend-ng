import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AdminAuthService  } from 'src/services';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class AdminHeaderComponent implements OnInit {
  adminLoginForm: FormGroup = this.fb.group({
    'email' : ['', Validators.required],
    'password' : ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private router: Router, private adminAuthService: AdminAuthService) { }

  get form() { return this.adminLoginForm.controls }

  ngOnInit(): void {}

  onSubmit = () => {
    const data = {
      email : this.form['email'].value,
      password : this.form['password'].value
    }
    const res = this.adminAuthService.adminLogin(data).subscribe(res => {
      if(res.type === 'success'){
        const userData = {
          'token' : res.token,
          'name' : res.user.name
        }
        localStorage.setItem('userData', JSON.stringify(userData))
        this.router.navigate(['/admin/add-product'])
      }
    })
  }

  adminLogout = () => {
    const res = this.adminAuthService.adminLogout().subscribe(res => {
      if(res.type === 'success'){
        localStorage.removeItem('userData');
        this.router.navigate(['/admin/login'])
      }
    })
  }
  
}
