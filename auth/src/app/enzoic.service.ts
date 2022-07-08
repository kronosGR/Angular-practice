import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EnzoicService {
  constructor(private http: HttpClient) {}

  checkPassword(password: string) {
    return this.http.get('https://api.enzoic.com/passwords');
  }
}
