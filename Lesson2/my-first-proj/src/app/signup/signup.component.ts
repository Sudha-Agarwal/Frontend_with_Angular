import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { User } from '../models/user';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserService } from '../services/user.service';

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
    email: new FormControl('',[Validators.required, emailDomainValidator]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  get f(){
    return this.RegisterationForm.controls;
  }

  constructor(private ds:DataService, private router:Router,
    private userService:UserService) { }

  ngOnInit(): void {
  }

  submit(){
    this.submitted = true;
   
    if (this.RegisterationForm.valid) {
      
      console.table(this.RegisterationForm.value);
    const { firstName, lastName, email, password } = this.RegisterationForm.value;
    // Create a new User instance
    const userToAdd = new User(firstName , lastName , email, password );
      this.userService.createNewUser(userToAdd)
      .subscribe({
        next:(response:any)=>{
          alert(response.message);
          this.router.navigate(['/login']);          
        },
        error: err=>alert(err)
      })
    }
    
    
  }

}

export function emailDomainValidator(control: AbstractControl):ValidationErrors | null{
  let email = control.value;
  if(email && email.indexOf("@")!=-1){
    let[_,domain] = email.split("@");
    if(domain!== "gmail.com"){
      return{
        emailDomain:{
          parseDomain:domain

        }
      }
    }
  }
  return null;

}

