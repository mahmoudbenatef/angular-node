  import { Component, OnInit, EventEmitter, Output} from '@angular/core';
  import {FormControl, FormGroup, Validators} from '@angular/forms';
  import {UserService} from '../../services/user.service';
  import { Router } from '@angular/router';

  @Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private myService: UserService,private router: Router) { }
    profileForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.min(4)]),
      email: new FormControl('',
      [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  
    });
    subscriber: any;

    @Output() todoEmmiter: EventEmitter<{name: string, email: string, completed: boolean}> = new EventEmitter();

  ngOnInit(): void {
  }
  addTodo(): void{
    console.log("first");
    
    if (this.profileForm.valid){
      console.log("second");
        this.subscriber = this.myService.addUser(this.profileForm.value)
        .subscribe({
          next: (msg: any) => {
            console.log(msg);

    this.profileForm.patchValue({
      name:  '', 
      email: '',
    });
            this.todoEmmiter.emit(this.profileForm.value);
            let element = document.getElementById("modal")?.click()
          },
          error: (err: any) => {
            console.log(err);
          }
          });
    }
  }
}
