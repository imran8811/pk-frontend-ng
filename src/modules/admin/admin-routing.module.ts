import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminAuthGuard } from 'src/guards/admin-auth-guard/admin-auth.guard';

import {
  AddProductComponent,
  AdminLoginComponent,
  AdminProductsComponent,
  CreateAdminUserComponent,
  EditProductComponent
} from './components';

const routes: Routes = [
  { path: 'login', component: AdminLoginComponent },
  { path: 'add-product', component: AddProductComponent, canActivate: [AdminAuthGuard] },
  { path: 'edit-product/:id', component: EditProductComponent, canActivate: [AdminAuthGuard] },
  { path: 'products', component: AdminProductsComponent, canActivate: [AdminAuthGuard] },
  { path: 'create-admin-user', component: CreateAdminUserComponent, canActivate: [AdminAuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {}
