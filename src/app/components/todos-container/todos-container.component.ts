import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss']
})
export class TodosContainerComponent implements OnInit {

  constructor() { }
  todo: any;
  ngOnInit(): void {
  }
  reciveTodo(obj: {name: string, email: string, completed: boolean}): void {
    this.todo = obj;
  }

}
