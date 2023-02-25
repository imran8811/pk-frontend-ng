import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  ProductDetailsComponent,
  ShopListingComponent
} from './components';

const routes: Routes = [
  { path: '', component: ShopListingComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ShopRoutingModule { }
