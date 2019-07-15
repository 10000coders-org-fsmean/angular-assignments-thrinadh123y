import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
authors;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
this.commonService.getdata().subscribe((res)=>{
  this.authors=res;
  console.log(this.authors)
})
  }

}
