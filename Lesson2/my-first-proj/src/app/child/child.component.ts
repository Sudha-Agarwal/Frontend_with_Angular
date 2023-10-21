import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('message') meesageFromParent:string;
  @Output() messageSent = new EventEmitter<string>();

  sendMessage(){
    const messageToParent = "Message from child to parent";
    this.messageSent.emit(messageToParent);
  }
}
