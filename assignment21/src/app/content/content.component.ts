import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
last;
middle;
  constructor(private lastContent:CommonService) { }

  ngOnInit() {
    this.lastContent.getlastcontent().subscribe((res)=>{
      this.last=res;
      console.log(this.last)
      this.middlepart()
    })
  }
middlepart(){
  this.lastContent.getmiddle().subscribe((res)=>{
this.middle=res;
  })
}
}
