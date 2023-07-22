import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cityName: string = 'Tehran';
  constructor() {}

  public search(input: string): void {
    this.cityName = input;
  }
}