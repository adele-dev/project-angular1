import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.scss']
})
export class InputChildComponent implements OnInit {

  @Input() dataChild:string ="";
  @Input() buttonColor:string ="";
  @Input() nameButton:string="";

  @Output() valueToSend:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onClickButton(){
    this.valueToSend.emit(this.nameButton);
  }

}
