import { Component, OnInit } from '@angular/core';
import { CommonService } from '../app/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent{
details;
  constructor(private product:CommonService) { }
  ngOnInit(){
    this.product.communicate.subscribe((res)=>{
      this.details=res;
      console.log(this.details)
    })
  }
}