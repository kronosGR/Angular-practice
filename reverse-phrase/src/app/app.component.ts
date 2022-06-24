import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text = '';

  onClickReverse() {
    console.log('Clicked');
  }

  onInputText(event: any) {
    this.text = (event.target as HTMLInputElement).value;
  }
}
