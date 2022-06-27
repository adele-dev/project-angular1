import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../models/subscriber.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  foodList:string[]=["houmous", "tomate", "pita", "sesame", "cerise"];
  isNecessary:boolean = true;

  subscriber: Subscriber = new Subscriber("Loulou", true, ['Spring Ball', 'Oversize', 'Down the river','Among the way'] )
  isPremium:boolean = false;
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
