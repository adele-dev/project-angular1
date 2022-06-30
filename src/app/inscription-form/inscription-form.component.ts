import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Address } from '../models/address.model';
import { User } from '../models/user.modele';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.scss']
})
export class InscriptionFormComponent implements OnInit {

  //userName = new FormControl("");
  //userEmail = new FormControl("");
  //userPassword = new FormControl("");
  //userStreet = new FormControl("");
  //userCode = new FormControl("");
  //userCity = new FormControl("");
  
  user: User = new User("","","", new Address("","",""));
  displayUser:boolean = false;

  userForm = this.formBuild.group({
    userName:[''],
    credentials: this.formBuild.group({
      userEmail:[''],
      userPassword:[''],
    }),
    userStreet:[''],
    userCode:[''],
    userCity:[''],
  });

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.displayUser = true;

    this.user = new User(
      this.userForm.get("userName")?.value!, 
      this.userForm.get("credentials.userEmail")?.value!, 
      this.userForm.get("credentials.userPassword")?.value!, 
      new Address(
        this.userForm.get("userStreet")?.value!, 
        this.userForm.get("userCode")?.value!, 
        this.userForm.get("userCity")?.value!,
      )
    );
    console.log(this.userForm.value);
  }

}
