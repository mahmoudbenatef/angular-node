import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private myAcitvatedRoute: ActivatedRoute, private myservice: UserService) {
    this.id = myAcitvatedRoute.snapshot.params.id;
  }
  id = '';
  user: any = {};
  subscriber: any;

  ngOnInit(): void {
    console.log(this.id);
    
    this.subscriber = this.myservice.getUserDetails(this.id)
    .subscribe({
    next: (returnedUser: any) => {
      this.user = returnedUser
    },
    error: (err: any) => {
      console.log(err);
    }
    });
  }

}
