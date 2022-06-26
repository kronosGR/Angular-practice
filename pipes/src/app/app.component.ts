import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes';

  name = 'kronos zeus';
  todayDate = new Date();
  cost = 2000;
  temperature = 25.3121;
  pizza = {
    toppings: ['pepperoni', 'mushroom'],
    size: 'Large',
  };
}
