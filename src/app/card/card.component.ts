import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  user1: UserCard = new UserCard('ATOLL', 'Lola', 27, 'La vie est belle :)',
  'https://placekitten.com/410/500');
  user2: UserCard = new UserCard('NATOLLI', 'Mélanie', 18, 'Le chocolat c\'est la vie :)',
  'https://placekitten.com/410/407');

  constructor() {

   }

  ngOnInit(): void {
  }
  modif(){}

}

class UserCard{
  name: string;
  firstname: string;
  age: number;
  quote: string;
  photo:string;
  constructor(name: string, firstname: string, age: number, quote:string, photo:string){
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.quote= quote;
    this.photo = photo;
  }
}


