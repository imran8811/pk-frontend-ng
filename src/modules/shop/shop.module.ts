import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import {
  ProductDetailsComponent,
  ShopListingComponent
} from './components';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ShopListingComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShopRoutingModule,
    SharedModule,
    NgbCarouselModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShopModule { }
