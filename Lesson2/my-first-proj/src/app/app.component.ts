import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-proj';  

  constructor(private sharedDataService:SharedDataService,
    private router:Router){}

  imgPath = "../assets/download.png";
  diffImg = "";
  isAdmin:boolean = false;
  isLoggedIn:boolean;
  isLoggedOut:boolean;

  isValid(){
    return false;
  }

  isTrue(){
    return false;
  }

  onClick(){
    alert("button clicked");
  }

  ngOnInit(): void {
    this.sharedDataService.isLoggedIn$.subscribe(data => {
      this.isLoggedIn = data;
      this.isLoggedOut = !data;
    })
  }

  logout(){
    alert("you will be logged out");
    this.sharedDataService.LoggedOut(false);
    this.router.navigate(['/login']);


  }


}
