import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class Header implements OnInit {
  @Input() title: String;
  constructor() {}

  ngOnInit() {}
}
