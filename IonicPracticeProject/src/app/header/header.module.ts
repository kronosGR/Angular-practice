import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [Header],
  imports: [IonicModule],
  exports: [Header],
})
export class HeaderModule {}
