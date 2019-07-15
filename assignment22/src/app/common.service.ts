import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  getproducts(){
    return this._http.get("http://localhost:3000/products")
  }
  addcart(obj1){
    return this._http.post('http://localhost:3000/cart',obj1);
   }
   cart(){
     return this._http.get('http://localhost:3000/cart')
   }
   delete(obj1){
    let headers={
      "Content-Type":"application/json"
    }
    return this._http.delete('http://localhost:3000/cart/'+obj1.id,{headers:headers})
  }
}
