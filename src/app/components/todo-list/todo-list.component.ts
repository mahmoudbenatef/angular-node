import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

import {User} from '../../user';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges {

  constructor(private myservice: UserService) {
  }
  @Input() todo: any;
  completed =  0;
  updating = false;
  search='';

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.min(4)]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      _id:  new FormControl('')

  });

  editedUser={name:'', email:'',_id:''};
  subscriber: any;
  users: any = [];
  loadUsers():any{
    this.subscriber = this.myservice.getUsers()
    .subscribe({
    next: (users: User) => {
      console.log(users);
      this.users = users;
    },
    error: (err: any) => {
      console.log(err);
    }
    });
  }
  ngOnInit(): void {
    this.loadUsers();
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    this.loadUsers();
  }
  deleteUser(id:any):any{
    this.subscriber = this.myservice.deleteUser(id)
    .subscribe({
    next: (msg: any) => {
      this.loadUsers();
    },
    error: (err: any) => {
      console.log(err);
    }
    });  
  }
  updateUser():any{
    this.subscriber = this.myservice.updateUser(this.profileForm.value['_id'] ,{name:this.profileForm.value["name"],email:this.profileForm.value["email"]})
    .subscribe({
    next: (msg: any) => {
      this.updating = false;
      this.loadUsers();
    },
    error: (err: any) => {
      console.log(err);
    }
    });  
  }
  editUser(user:any):any{
    this.profileForm.patchValue({
      name:  user["name"], 
      email: user["email"],
      _id: user["_id"]
    });
    console.log(this.profileForm.value);
    
    this.updating = true;
  }
  cancelEdit(){
    console.log("here ");
    
    this.updating=false
  }
  searchUsers(){
    this.search?
    this.subscriber = this.myservice.searchUsers({name:this.search})
    .subscribe({
    next: (users: User) => {
      console.log(users);
      this.users = users;
    },
    error: (err: any) => {
      console.log(err);
    }
    })
    :
    this.loadUsers()
    
  }
}
