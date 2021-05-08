import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  name = '';
  age = NaN;
  users: {name: string, age: number}[] = [];
  ngOnInit(): void {
  }
  addUser(): void{
    this.users.push({name: this.name, age: this.age});
    this.name = '';
    this.age = NaN;
  }
  isNumber(value: number): boolean {
    return Number.isNaN(value);
  }
}
