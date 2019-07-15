import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
nav;
main;
  constructor(private navigation:CommonService) { }
title(){
  this.navigation.gettitle().subscribe((title)=>{
    this.main=title;
  })
}
  ngOnInit() {
this.navigation.getheader().subscribe((res)=>{
  this.nav=res;
  this.title()
})
  }

}
