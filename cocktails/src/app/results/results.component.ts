import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  @Input() drinks = [] as any[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.drinks);
  }
}
