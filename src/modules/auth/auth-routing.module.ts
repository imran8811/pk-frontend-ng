import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  LoginComponent
} from './components';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthRoutingModule { }
