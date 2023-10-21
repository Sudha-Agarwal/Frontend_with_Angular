
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "http://localhost:3000";
  headers:HttpHeaders;

  constructor(private http:HttpClient, 
    private userService:UserService) { 

  }

  getProducts(category:string): Observable<Product[]>{
    this.headers = new HttpHeaders()
    .set('Authorization', `${this.userService.getToken()}`);
    const params = new HttpParams().set("category",category);
    return this.http.get<Product[]>(`${this.url}/products`,{'headers': this.headers, 'params':params});  
  }

  getData(){
    return "data";
  }

  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(this.url + '/products', product);
  }
  

}


