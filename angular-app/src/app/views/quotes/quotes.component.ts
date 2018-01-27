import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  cars: Car[];

  constructor() {
  }

  ngOnInit() {
    this.cars = [{vin: 'dsad231ff', brand: 'Audi', color: 'Red', year: 2015}];
  }

}


export interface Car {
  vin;
  year;
  brand;
  color;
}
