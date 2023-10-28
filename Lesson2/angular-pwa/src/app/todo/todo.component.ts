import { Component,OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
toList!:any[];
  constructor(private todoService:TodoService){}

  ngOnInit(): void {
    if(navigator.onLine){
      this.todoService.getTodoListFreshness().subscribe({
        next:data=>this.toList = data
      });

    }
    else{
      this.todoService.getTodoListPerformance().subscribe({
        next:data=>this.toList = data
      })
    }
    
    
    
  }



}
