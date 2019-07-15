import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  communicate = new Subject();
  constructor(private _http:HttpClient) { 
    console.log(this.communicate)
  }
  getheader(){
    return this._http.get('http://localhost:3000/header');
  }
  gettitle(){
    return this._http.get('http://localhost:3000/main')
  }
  getnav(){
    return this._http.get('http://localhost:3000/navigation');
  }
  getusers(){
    return this._http.get('http://localhost:3000/userdata')
  }
  getdata(){
    return this._http.get('http://localhost:3000/users')
  }
  getProducts(){
    return this._http.get('http://localhost:3000/products')
  }
  update(obj){
    let headers={
      "Content-Type":"application/json"
    }
    return this._http.put('http://localhost:3000/products/'+obj.id,obj,{headers:headers})
  }
  delete(obj){
   let headers={
     "Content-Type":"application/json"
   }
   return this._http.delete('http://localhost:3000/products/'+obj.id,{headers:headers})
 }
 getlastcontent(){
   return this._http.get("http://localhost:3000/contentlast");
 }
 getmiddle(){
   return this._http.get("http://localhost:3000/middle")
 }
}
