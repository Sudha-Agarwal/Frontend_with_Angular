import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isModalOpen = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    // Modal is initially closed
    this.isModalOpen = true;
  }

  openModal() {
    // Set the variable to true to open the modal
    this.isModalOpen = true;
  }

  closeModal() {
    // Set the variable to false to close the modal
    this.isModalOpen = false;
    this.router.navigate(['/home']);
  }

  
}
