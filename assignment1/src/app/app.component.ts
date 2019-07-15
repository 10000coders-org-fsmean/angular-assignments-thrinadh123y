import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  citys;
  title = 'assignment1';
  constructor(private commonService:CommonService) {
   }
   show(){
    this.commonService.getdata().subscribe((res)=>{
      this.citys=res;
      console.log(this.citys)
      })
   }
}
