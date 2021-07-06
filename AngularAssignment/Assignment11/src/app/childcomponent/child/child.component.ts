import { Component, Input,Output,EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


//  @Input() cname='';
  //  @Input() cname='';


  @Input()count:number=0
@Output() notify:EventEmitter<number>=new EventEmitter<number>();
SenddatafromChildtoParent(value:any)
{
  (value=='MutualFunds') ? this.count++ : this.count--

  this.notify.emit(this.count)
}
}

  // @Output() notify:EventEmitter<String>=new EventEmitter<String>();
  //   SenddatafromChildtoParent(){
  //     this.notify.emit('child data sending from ChildComponent')
  //   }
  // }



