import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-proj1';  

  imgPath = "../assets/download.png";
  diffImg = "";
  isAdmin:boolean = false;

  isValid(){
    return false;
  }

  isTrue(){
    return false;
  }

  onClick(){
    alert("button clicked");
  }
}
