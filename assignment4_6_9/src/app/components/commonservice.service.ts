import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
communicate= new Subject()
data1;
sendInfo=new Subject()
  constructor(private _http:HttpClient) {
    console.log(this.communicate)
   }
   sendData(details){

     console.log(details)
     this.communicate.next(details)
   }
   getdata(){
    return this._http.get('http://localhost:3000/users')
   }
   addauthor(obj){
     return this._http.post('http://localhost:3000/users',obj)
   }
   update(obj){
     return this._http.put('http://localhost:3000/users/'+obj.id,obj)
   }
   infoComp1(){
     this.sendInfo.next();
   }
   deleteauthor(i){
     return this._http.delete('http://localhost:3000/users/'+i)
   }
}
  

