import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url:string = environment.apiUrl;
  constructor(private http:HttpClient) { }
token:string;
  createNewUser(user:User):Observable<{message:string}>{
    return this.http.post<{message:string}>(this.url + '/createUser', user);

  }

  checkLogin(user:User):Observable<{message:string, token:string}>{
    return this.http.post<{message:string, token:string}>(`${this.url}/login`,user);
    
  }

  setToken(token:string){
    this.token = token;
  }

  getToken():string{
    return this.token;
  }

  deleteToken(){
    delete this.token;
  }
}
