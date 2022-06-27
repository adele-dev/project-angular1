import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CardComponent } from './card/card.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { InputParentComponent } from './input/input-parent/input-parent.component';
import { InputChildComponent } from './input/input-child/input-child.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CardComponent,
    CoursesListComponent,
    InputParentComponent,
    InputChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
