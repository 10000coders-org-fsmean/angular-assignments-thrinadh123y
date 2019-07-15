import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent{
    imageurl;
    constructor(private commonService:CommonService){
}
ngOnInit(){
    this.commonService.communicate.subscribe((res)=>{
        this.imageurl=res;
        console.log(this.imageurl)
    })
}
}