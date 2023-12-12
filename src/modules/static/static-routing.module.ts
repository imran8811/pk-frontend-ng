import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  HomeComponent,
  AboutComponent,
  ContactComponent,
  FactoryComponent,
  CertificationsComponent,
  BlogComponent,
  OrderNowComponent
} from './components';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'factory', component: FactoryComponent},
  { path: 'certifications', component: CertificationsComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'order-now', component: OrderNowComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class StaticRoutingModule { }
