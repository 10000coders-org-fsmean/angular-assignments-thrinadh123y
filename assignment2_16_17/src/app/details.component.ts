import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  data;
  constructor(private commonService:CommonService) { }
 
  ngOnInit() {
    this.commonService.communicate.subscribe((res)=>{
        this.data=res;
        console.log(res)
      })
      }
}
