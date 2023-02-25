import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LANDING_PAGES_COMPONENTS } from './components';

@NgModule({
  declarations: LANDING_PAGES_COMPONENTS,
  imports: [
    RouterModule,
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})

export class PostsModule { }
