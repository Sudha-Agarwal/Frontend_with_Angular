import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000";

  addProduct(product:any):Observable<any>{
    return this.http.post<any>(this.url + '/products',product);
  }
}
