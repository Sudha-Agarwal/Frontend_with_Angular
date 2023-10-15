
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "http://localhost:3000";

  constructor(private http:HttpClient) { 
    
  }

  getProducts(category:string): Observable<Product[]>{
    const params = new HttpParams().set("category",category);
    return this.http.get<Product[]>(`${this.url}/products`,{'params':params});  
  }

  getData(){
    return "data";
  }

  checkLogin(user:User){
    return this.http.post(`${this.url}/login`,user);
    
  }

}


