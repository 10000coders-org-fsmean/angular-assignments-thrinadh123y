import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 constructor(private _http:HttpClient) { }
  getMainImageList(){
    return this._http.get('http://localhost:3000/images')
  }
}