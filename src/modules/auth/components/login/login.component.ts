import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { UserService } from 'src/services/user.service';
import Konva from 'konva';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    'email' : ['', Validators.required],
    'password' : ['', Validators.required]
  });

  get loginFormControls() { return this.loginForm.controls }
  mouseDragging = false;

  constructor(title: Title, private meta: Meta, private fb: FormBuilder, private userService: UserService) { }
  
  ngOnInit(): void {
    // this.title.setTitle('About - Wholesale Jeans, Jeans Wholesalers, Wholesale Denim Pants')
    // this.meta.addTags([
    //   {name: 'keywords', content: 'Wholesale Jeans, Jeans Wholesalers, Wholesale Denim Pants'},
    //   {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    // ])
  }

  userLogin(){
    const data = {
      email: this.loginFormControls.email.value,
      password: this.loginFormControls.password.value
    } 
    console.log(data);
    const res = this.userService.userLogin(data).subscribe(res => res);
    console.log(res);
  }

}
