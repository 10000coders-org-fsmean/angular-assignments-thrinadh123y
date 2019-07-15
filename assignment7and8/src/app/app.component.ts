import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment7';
  data;
  search;
  selecteddata;
  constructor(private commonService:CommonService){}
  ngOnInit(){
this.getdata()
  }
  getdata(){
    this.commonService.get().subscribe((res)=>{
      this.data=res;
      console.log(this.data)
    })
  }
  show(obj){
    console.log(obj)
    this.commonService.sendData(obj);
  }
  adddata(myform){
    console.log(myform)
    this.search=myform;
    console.log(this.search);
    
  }
}
