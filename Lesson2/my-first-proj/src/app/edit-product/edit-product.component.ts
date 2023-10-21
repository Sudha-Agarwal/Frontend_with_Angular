import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  @Input() product:Product;

  @Output() productChange:EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private dataService:DataService){}

  update(){
    this.dataService.updateProduct(this.product)
    .subscribe({
      next: (response:any) => {        
        this.productChange.emit(this.product);
        alert(response.message);
      },
      error:error=>alert(error.error)
    })
  }
  

}
