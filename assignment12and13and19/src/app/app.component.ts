import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private commonService:CommonService){

  }
  images;
  visible;
  title = 'assignment12and13';
ngOnInit(){
  this.show();
  this.getimageurl()
}
   hide(){
    this.visible=false;
    console.log(this.visible)
}
show(){
this.visible=true;
console.log(this.visible)
}
getimageurl(){
this.commonService.getimages().subscribe((res)=>{
  this.images=res;
  console.log(this.images)
})
}
big(obj){
  console.log(obj)
  this.commonService.sendurl(obj)
}
}
