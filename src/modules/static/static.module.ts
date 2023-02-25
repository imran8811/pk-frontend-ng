import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaticRoutingModule } from './static-routing.module';
import { SharedModule } from '../shared/shared.module';

import {
  HomeComponent,
  AboutComponent,
  FactoryComponent,
  ContactComponent,
  CertificationsComponent,
  BlogComponent,
  PageNotFoundComponent
} from './components';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    FactoryComponent,
    ContactComponent,
    CertificationsComponent,
    BlogComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StaticRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class StaticModule { }
