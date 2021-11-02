import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch:'full',
      },
      {
        path: 'home',
        loadChildren: ()=> import('./home/home.module').then( m => m.HomeModule )
      },
      {
        path: 'products',
        loadChildren: ()=> import('./products/products.module').then( m => m.ProductsModule )
      },
      {
        path: 'products/:id',
        loadChildren: ()=> import('./product-detail/product-detail.module').then( m => m.ProductDetailModule )
      },
      {
        path: 'contact',
        loadChildren: ()=> import('./contact/contact.module').then( m => m.ContactModule ),
        canActivate: [ AdminGuard ]
      }
    ]
  },
  {
    path: 'demo',
    loadChildren: ()=> import('./demo/demo.module').then( m => m.DemoModule )
  },
  {
    path: '**',
    loadChildren: ()=> import('./notfound/notfound.module').then( m => m.NotfoundModule ) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
