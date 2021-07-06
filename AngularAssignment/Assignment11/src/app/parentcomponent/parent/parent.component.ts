import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  Counter=1000;
  parentData(count: number) {
    this.Counter = count;
    console.log(count);
  }

  // puname:string = "DurgaDevi";


  // constructor() { }
  // parentdata:String="child to parent communication";


  // parentmethod(value:string)
  // {
  //   // console.log(`inside parent ${value}`)
  // this.parentdata=value;
  // }

   ngOnInit(): void {
   }

}
