import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {ContactModule} from "./contact/contact.module";
import {AboutModule} from "./about/about.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule,ContactModule,AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
