import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
data
  constructor(private user:CommonService) { }

  ngOnInit() {
    this.user.getusers().subscribe((res)=>{
      this.data=res;
    })
  }

}
