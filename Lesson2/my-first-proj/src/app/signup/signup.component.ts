import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user!:User;
  submitted = false;


  RegisterationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  get f(){
    return this.RegisterationForm.controls;
  }

  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.submitted = true;
   
    if (this.RegisterationForm.valid) {
      alert("hi");
      console.table(this.RegisterationForm.value);
    const { firstName, lastName, email, password } = this.RegisterationForm.value;
    // Create a new User instance
    const userToAdd = new User(firstName , lastName , email, password );
    }
    
    
  }

}
