import { Component } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home Component';
  user:User = new User(1,'Sudha','sudha@gmail.com');

}
