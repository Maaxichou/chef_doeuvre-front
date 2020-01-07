import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from "@angular/common/http";
import { ExpoListComponent } from './expo-list/expo-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ExpoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
