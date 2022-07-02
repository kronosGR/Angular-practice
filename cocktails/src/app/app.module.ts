import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FormComponent, ResultsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  exports: [FormComponent, ResultsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
