import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserComponent } from "./user/user.component";

const ROUTES = [
    {path:'sign-up', component:SignUpComponent},
    {path:'user', component:UserProfileComponent},
    {path:'', component:UserProfileComponent}
];

export{ROUTES};