import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() submitted = new EventEmitter();
  query = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: Event) {
    event.stopPropagation();
  }

  updateQuery(event: Event) {
    this.query = (event.target as HTMLInputElement).value;
    this.submitted.emit(this.query);
  }
}
