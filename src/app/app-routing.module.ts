import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{ path: 'products', component: ProductsComponent },
                        { path: 'product-details/:id', loadChildren: ()=> import('./product-details/product-details.module').then(m => m.ProductDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [ProductsComponent];
