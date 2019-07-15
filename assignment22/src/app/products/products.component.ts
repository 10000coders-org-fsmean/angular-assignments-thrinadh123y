import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
allproducts;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.getproducts().subscribe((res)=>{
     this.allproducts=res;
   })
  }
addtocart(obj1){
  this.commonService.addcart(obj1).subscribe((res)=>{
console.log(obj1)
  })
}
}
