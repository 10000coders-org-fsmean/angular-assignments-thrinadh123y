import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthorsComponent } from './authors/authors.component';
import { ProductsComponent } from './products/products.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'authors', component:AuthorsComponent},
  {path:'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }