import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [AppComponent, InputComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  exports: [InputComponent],
})
export class AppModule {}
