import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{
  category:string='';
  products!:any[];

  constructor(private obj:DataService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      this.category = params['category'];
    })
    this.obj.getProducts(this.category).subscribe({
      next:data=>this.products = data,
      error: err=>console.log(err),
      complete:()=>console.log('complete')      
    })
    
  }

  ngOnDestroy(): void {
    
  }
data:string | null ='';
 

  addItem(){
    this.data = this.obj.getData();
    console.log(this.data);
  }

  

}
