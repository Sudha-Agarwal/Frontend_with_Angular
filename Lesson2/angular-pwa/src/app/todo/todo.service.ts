import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodoListPerformance():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5000/api/performance-todos');
  }

  getTodoListFreshness() :Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5000/api/freshness-todos');
  }
}
