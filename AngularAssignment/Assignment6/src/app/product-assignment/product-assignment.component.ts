import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-assignment',
  templateUrl: './product-assignment.component.html',
  styleUrls: ['./product-assignment.component.css']
})
export class ProductAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productdetails =[ 
    {
    productid:1,
    productname:'DairyMilk',
    productprice:300,
    productdesc:'product contains 10packets of dairymilk chocolates',
  productimg:'assets/choco.jpeg',
},
{
  productid:2,
  productname:'kitkat',
  productprice:250,
  productdesc:'product contains 20 packets of kitkat chocolates',
  productimg:'assets/kitkat.webp', 
},
{
productid:3,
    productname:'Snickers',
    productprice:500,
    productdesc:'product contains 30 packets of snickers chocolates',
  productimg:'assets/snickers.jpg',}]
}
   


