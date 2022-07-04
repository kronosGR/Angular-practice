import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';

interface CocktailResponse {
  drinks: {
    strDrink: string;
    strInstructions: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(private http: HttpClient) {}

  public search(query: string) {
    return (
      this.http
        .get<CocktailResponse>(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php',
          {
            params: {
              s: query,
            },
          }
        )
        // returns only the drinks field
        .pipe(pluck('drinks'))
    );
  }
}
