import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styleUrls: ['./input-parent.component.scss']
})
export class InputParentComponent implements OnInit {

  dataParent:string = "lightgreen";
  dataParent2:string = "lightblue";
  dataParent3:string = "lightpink";
  dataParent4:string = "lightyellow";
  dataParent5:string = "lightsalmon";

  colors:string[] = [
    "lightgreen", "lightsalmon", "lightyellow", "lightpink", "lightblue"
  ];

  buttonList:string[]= ["bouton 1", "bouton 2", "bouton 3", "bouton 4", "bouton 5"];
  wichButtonMessage = "";

  constructor() { }

  ngOnInit(): void {
  }

  recieveNameOfClickedButton(NameOfClickedButton:string){
    this.wichButtonMessage = "Le " + NameOfClickedButton + " a été cliqué";
  }

}
