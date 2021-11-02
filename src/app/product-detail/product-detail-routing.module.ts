import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './components/product/product-detail.component';

const routes: Routes = [
    { 
        path: '', 
        component: ProductDetailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductDetailRoutingModule {}
