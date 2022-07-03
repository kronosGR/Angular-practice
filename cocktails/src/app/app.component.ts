import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  drinks = [];
  constructor(private cocktail: CocktailService) {}

  search(query: string) {
    this.cocktail.search(query).subscribe((response: any) => {
      // console.log(response);
      this.drinks = response.drinks;
      // console.log(this.drinks);
    });
  }
}
