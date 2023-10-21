import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private dataSubjectLogin = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.dataSubjectLogin.asObservable();

  LoggedIn(newValue:boolean){
    this.dataSubjectLogin.next(true);
  }

  LoggedOut(newValue:boolean){
    this.dataSubjectLogin.next(false);
  }
  constructor() { }
}
