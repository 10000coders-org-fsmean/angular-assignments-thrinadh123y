import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.getdata().subscribe((res)=>{
console.log(res)
    })
  }

}
