import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ccForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
}
