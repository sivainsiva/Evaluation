import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent {
  events: string[] = [];
  opened: boolean;
  constructor() { }
  ngOnInit(): void {
    opened: true;
  }

}
