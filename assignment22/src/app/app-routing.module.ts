import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"cart",component:CartComponent},
  {path:"users",component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }