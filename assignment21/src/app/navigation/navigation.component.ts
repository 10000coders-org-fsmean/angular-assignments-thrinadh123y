import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
navheader;
  constructor(private navigation:CommonService) { }

  ngOnInit() {
    this.navigation.getnav().subscribe((header)=>{
      this.navheader=header;
    })
  }


}
