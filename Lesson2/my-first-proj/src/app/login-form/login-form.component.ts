import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user:User = {email:'', password:''};

  constructor(private ds: DataService){}

  onSubmit(){
    alert(this.user.email);
    this.ds.checkLogin(this.user).subscribe({

    });



    
  }

 

 


}
