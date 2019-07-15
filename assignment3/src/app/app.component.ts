import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  data;
  constructor(private commonService:CommonService) { }
  ngOnInit(){
this.get()
  }
get(){
  this.commonService.getdata().subscribe((res)=>{
    this.data=res;
    console.log(this.data)
  })
}
deletefirst(){
  this.data.shift();
}
deletelast(){
  this.data.pop();
}
deletespecific(){ 
  this.data.splice(2,1); 
}
deleteodd(){
  for (var i = 0; i < this.data.length; i++) {
if(!(this.data[i]%2==0)){
  this.data.splice(i, 1);
}
}
}
deleteeven(){
  for (var i = 0; i < this.data.length; i++) {
if(!(this.data[i]%2==0)){
  var j=i+1;
  this.data.splice(j, 1);
}
}
}
changebg(){
  
  }
}
