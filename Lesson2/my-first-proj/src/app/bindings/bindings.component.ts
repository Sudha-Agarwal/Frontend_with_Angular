import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  buttonDisabled:boolean = false;
  isActive:boolean = true;
  cssStringVar:string = 'red size20';
  isHighlighted:boolean = false;

  clicked(){

  }

  hasError(){
    return false;
  }

  getStyle(){
    return{
      'font-size':this.isHighlighted ? '20px':'16px',
      'color':this.isHighlighted ? 'red':'black'
    };
  }

  toggleHighlight(){
    this.isHighlighted = !this.isHighlighted;
  }

  products:any[] = [{description:'TV',price:10000,stock:10},
  {description:'TV',price:10000,stock:10},
  {description:'TV',price:10000,stock:0},
  {description:'TV',price:10000,stock:0}
]
  
  isProductInStock(product:any){
    return product.stock>0;
  }

}
