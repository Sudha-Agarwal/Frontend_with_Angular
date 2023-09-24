import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:any = [
    {id:1, name:'Product1', Description:'Description1',type:'Mobile'},
    {id:2, name:'Product2', Description:'Description2',type:'Mobile'},
    {id:3, name:'Product3', Description:'Description3',type:'Laptop'},
    {id:4, name:'Product4', Description:'Description4',type:'Laptop'}
  ];

  condition:boolean = false;
  someValue = 'value1';
  switchValue:any;

}
