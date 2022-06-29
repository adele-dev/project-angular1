import { Component, OnInit } from '@angular/core';
import { UserSignUp } from '../models/userSignUp.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userSignUp: UserSignUp = new UserSignUp("","","","");
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any):void{
    console.log(this.userSignUp);
    //console.log(form);
  }

}
