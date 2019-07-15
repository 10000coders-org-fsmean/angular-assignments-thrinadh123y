import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data;
  constructor(private commonService:CommonService) { }
  title = 'assignment2';
  ngOnInit() {
this.getCitys()
      }
getCitys(){
  this.commonService.getdetails().subscribe((res)=>{
    this.data=res;
    console.log(this.data)
  })
}
details(obj){
console.log(obj)
this.commonService.sendData(obj)
}
}
