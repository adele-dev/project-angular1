import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user = {
    name: 'Doe',
    firstName:  'John',
    age: 25,
    
    quote: 'Do the right thing',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  isAgeVisible:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  hideAge(){
    this.isAgeVisible = !this.isAgeVisible;
  }

}
