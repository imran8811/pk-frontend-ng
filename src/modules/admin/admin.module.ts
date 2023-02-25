import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import {
  AddProductComponent,
  AdminLoginComponent,
  AdminHeaderComponent,
  AdminProductsComponent,
  CreateAdminUserComponent,
  EditProductComponent
} from './components';

@NgModule({
  declarations: [
    AddProductComponent,
    AdminLoginComponent,
    AdminHeaderComponent,
    AdminProductsComponent,
    CreateAdminUserComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})

export class AdminModule { }
