import { Component, NgZoneOptions, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit{
  name = "sudha";
  amount = 1234.5678;
  date = new Date();
  dateString = '2023-10-14T12:30:30';

  products$:Observable<Product[]>;

  constructor(private ds:DataService){}

  ngOnInit(): void {
    this.products$ = this.ds.getProducts('Mobiles');
  }



}
