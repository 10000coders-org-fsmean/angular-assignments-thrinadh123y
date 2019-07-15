import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonserviceService } from '../commonservice.service'
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
users;
  constructor(private commonService:CommonserviceService,private ref:ChangeDetectorRef) { }
 ngOnInit() {
   this.diplay()
   this.commonService.sendInfo.subscribe((res)=>{
     this.diplay()
     this.ref.markForCheck()
   })
  }
  selectUser(obj){
    console.log(obj)
   this.commonService.sendData(obj)
  }
  adddata(myform){
    console.log(myform)
    this.commonService.addauthor(myform).subscribe((res)=>{
      console.log(res)
      this.diplay()
    })
  }
  diplay(){
    this.commonService.getdata().subscribe((res)=>{
      this.users=res;
    });
  }
  delete(index){
    console.log(index)
    this.commonService.deleteauthor(index).subscribe((res)=>{
this.diplay();
    })
  }
}

