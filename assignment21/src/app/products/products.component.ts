import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products;
editedobj;
  constructor(private product:CommonService) { }
getproduts(){
  this.product.getProducts().subscribe((res)=>{
    this.products=res;
    })
}
  ngOnInit() {
this.getproduts();
  }
  editProduct(obj1,i){
this.editedobj=obj1;
}
deleteProduct(obj1,i){
this.product.delete(obj1).subscribe((res)=>{
  this.getproduts();
})
}
update(){
  console.log(this.editedobj)
  this.product.update(this.editedobj).subscribe((res)=>{
    console.log(res)
    this.getproduts();
  })
}
}
