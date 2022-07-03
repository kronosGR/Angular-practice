import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  @Input() drinks = [] as any[];
  @Input() query = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.drinks);
  }

  boldStr(str: string) {
    if (this.query.length < 3) {
      return str;
    }

    const reg = new RegExp('(' + this.query + ')', 'gi');
    return str.replace(reg, '<span class="alert-primary">$1</span>');
  }
}
