import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/modules/static/components';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../modules/static/static.module').then(module => module.StaticModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('../modules/posts/posts.module').then(module => module.PostsModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('../modules/admin/admin.module').then(module => module.AdminModule),
  },
  {
    path: 'wholesale-shop',
    loadChildren: () => import('../modules/shop/shop.module').then(module => module.ShopModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
