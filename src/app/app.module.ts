import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HomeComponent } from './home/home.component';
import { NopagetodisplayComponent } from './nopagetodisplay/nopagetodisplay.component';
import { Router, RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { CreatebookComponent } from './createbook/createbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const appRoutes : Routes=[

  {path : 'home',component:HomeComponent},
  {path : 'students',component:StudentlistComponent},
  {path : 'createbook',component:CreatebookComponent},
  {path : 'students/update',component:UpdatebookComponent},
  {path : '',redirectTo:'/home',pathMatch:'full'},
  {path : '**',component:NopagetodisplayComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    HomeComponent,
    NopagetodisplayComponent,
    CreatebookComponent,
    UpdatebookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
