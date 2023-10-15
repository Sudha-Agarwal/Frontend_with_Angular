import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DataService } from '../data.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user:User = {email:'', password:''};

  constructor(private userService: UserService){}

  onSubmit(){
    alert(this.user.email);
    this.userService.checkLogin(this.user).subscribe({
      next:(response:any)=>{
        if(response.token){
          alert(response.message);
          this.userService.setToken(response.token);
        }
      }

    });   
  }

 

 


}
