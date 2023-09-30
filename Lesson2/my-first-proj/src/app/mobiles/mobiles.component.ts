import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  ngOnInit(): void {
    this.obj.getProducts().subscribe({
      next:data=>console.log(data),
      error: err=>console.log(err),
      complete:()=>console.log('complete')
      
    })
    
  }

  ngOnDestroy(): void {
    
  }
data:string | null ='';
  constructor(private obj:DataService){}

  addItem(){
    this.data = this.obj.getData();
    console.log(this.data);
  }

  

}
