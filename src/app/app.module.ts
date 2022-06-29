import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CardComponent } from './card/card.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { InputParentComponent } from './input/input-parent/input-parent.component';
import { InputChildComponent } from './input/input-child/input-child.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ROUTES } from './app.routes';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CardComponent,
    CoursesListComponent,
    InputParentComponent,
    InputChildComponent,
    MenuComponent,
    SignUpComponent,
    InscriptionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
