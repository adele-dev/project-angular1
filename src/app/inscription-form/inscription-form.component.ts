import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Address } from '../models/address.model';
import { User } from '../models/user.modele';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.scss']
})
export class InscriptionFormComponent implements OnInit {

  userName = new FormControl("");
  userEmail = new FormControl("");
  userPassword = new FormControl("");
  userStreet = new FormControl("");
  userCode = new FormControl("");
  userCity = new FormControl("");

  user: User = new User("","","", new Address("","",""));

  displayUser:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.displayUser = true;
    this.user = new User(this.userName.value!, this.userEmail.value!, this.userPassword.value!, 
                new Address(this.userStreet.value!, this.userCode.value!, this.userCity.value!));
  }

}
