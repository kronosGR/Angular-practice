import { NgModule } from '@angular/core';
('AboutMainComponent');
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, AppModule, AppModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
