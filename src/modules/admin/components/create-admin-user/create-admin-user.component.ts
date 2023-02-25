import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AdminAuthService  } from 'src/services';

@Component({
  selector: 'app-create-admin-user',
  templateUrl: './create-admin-user.component.html',
  styleUrls: ['./create-admin-user.component.scss']
})

export class CreateAdminUserComponent implements OnInit {
  createAdminUserForm: FormGroup = this.fb.group({
    'name' : ['', Validators.required],
    'email' : ['', Validators.required],
    'password' : ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private router: Router, private adminAuthService: AdminAuthService) { }

  get form() { return this.createAdminUserForm.controls }

  ngOnInit(): void {}

  onSubmit = () => {
    const data = {
      name : this.form['name'].value,
      email : this.form['email'].value,
      password : this.form['password'].value
    }
    const res = this.adminAuthService.createAdminUser(data).subscribe(res => {
      if(res.type === 'success'){
        // const adminData = {
        //   'token' : res.token,
        //   'name' : res.user.name
        // }
        // localStorage.setItem('adminData', JSON.stringify(adminData))
        this.router.navigate(['/admin/add-product'])
      }
    })
  }
  
}
