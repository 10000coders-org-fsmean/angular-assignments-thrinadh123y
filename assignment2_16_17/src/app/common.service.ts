import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
communicate = new Subject()
data
  constructor(private _http:HttpClient) {
    console.log(this.communicate)
   }
   sendData(details){
  
    console.log(details)
    this.communicate.next(details)
  }
   getdetails(){
      return this._http.get('http://localhost:3000/citys')
   }
}