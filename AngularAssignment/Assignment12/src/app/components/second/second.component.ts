import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  Customers:any=[]
  constructor(private dataService:DataService) {
    dataService.currentMsg.subscribe((successMsg) => this.Customers = successMsg)
  }

  ngOnInit(): void {
  }
  modifiedData(){
    this.dataService.changeData({"customerId":101,"customerName":"Asritha","customerEmailid":"Asritha@gmail.com"})

  }

}

