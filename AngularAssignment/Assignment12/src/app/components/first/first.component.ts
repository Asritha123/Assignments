import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  Customers:any=[]


  constructor(private dataService:DataService) {
    dataService.currentMsg.subscribe((successMsg) => this.Customers = successMsg)
  }

  ngOnInit(): void {
  }
  modifiedData(){
    this.dataService.changeData({"customerId":102,"customerName":"Pallavi","customerEmailid":"Pallavi@gmail.com"})
    this.dataService.changeData({"customerId":103,"customerName":"Sree","customerEmailid":"Sree@gmail.com"})
}
}
