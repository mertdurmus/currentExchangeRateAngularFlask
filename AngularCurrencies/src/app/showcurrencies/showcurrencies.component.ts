import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Currency } from '../models/currency.model';

@Component({
  selector: 'app-showcurrencies',
  templateUrl: './showcurrencies.component.html',
  styleUrls: ['./showcurrencies.component.css']
})
export class ShowcurrenciesComponent implements OnInit {

  constructor(private service: CurrencyService) { }

  currency: Currency[];


  ngOnInit() {
  }

  getCurrency() {
    this.service.getCurrency().subscribe(data => {
      this.currency = data;
      console.log(this.currency);
    });
    }
}

/**
 * 
 * https://towardsdatascience.com/python-plotting-api-expose-your-scientific-python-plots-through-a-flask-api-31ec7555c4a8
 */