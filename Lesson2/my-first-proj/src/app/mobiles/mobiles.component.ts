import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit, OnDestroy{
  category:string='';
  products!:Product[];
  subscription:Subscription;

  constructor(private obj:DataService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      this.category = params['category'];
    })
    this.subscription = this.obj.getProducts(this.category)
    .subscribe({
      next:data=>this.products = data,
      error: err=>console.log(err),
      complete:()=>console.log('complete')      
    })
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }
data:string | null ='';
 

  addItem(){
    this.data = this.obj.getData();
    console.log(this.data);
  }

  selectedproduct:Product;
  showEditProduct:boolean = false;

  showEdit(product:Product){
    this.selectedproduct = Object.assign({}, product);
    this.showEditProduct = true;
  }

  update(product:Product){
    this.showEditProduct = false;
    this.ngOnInit();
  }
  

}
