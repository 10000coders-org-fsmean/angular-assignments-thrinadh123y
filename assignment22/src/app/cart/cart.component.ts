import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  totalamount;
  cartitems;
  i;
  constructor(private commonService: CommonService) {}
  cart() {
    this.commonService.cart().subscribe(res => {
      this.cartitems = res;
      this.totalcart();

    });
  }
  ngOnInit() {
    this.cart();
  }
  remove(obj1, i) {
    this.commonService.delete(obj1).subscribe(res => {
      console.log(res);
      this.cart();
    });
  }
  totalcart() {
    let total=0;
    for (this.i = 0; this.i < this.cartitems.length; this.i++) {
      if(this.cartitems[this.i].price){
        this.totalamount=total+this.cartitems[this.i].price;
        total=this.totalamount;
         }
    }
    console.log(this.totalamount)
    return this.totalamount;
  }
}
