import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment20';
  constructor(private commonService:CommonService) {}
    
   imageList;
   imageIndex =0;
   private cureentIndex = 0
  ngOnInit() { 
    // this.imageIndex = 0
    this.getData()
    setInterval(()=>{
      this.imageIndex++
      if(this.imageIndex==this.imageList.length){
        this.imageIndex =0
      }
      
    },2000)
   }
 
  
  getData(){
    this.commonService.getMainImageList().subscribe((res)=>{
      this.imageList = res;
      console.log(this.imageList)
    })
  }
}
