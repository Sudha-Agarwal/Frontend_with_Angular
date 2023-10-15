
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getProducts(category:string): Observable<any[]>{
    const params = new HttpParams().set("category",category);
    return this.http.get<any[]>(`${this.url}/products`,{'params':params});  
  }

  getData(){
    return "data";
  }
}


