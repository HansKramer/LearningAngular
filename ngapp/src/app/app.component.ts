import { Component } from '@angular/core';
import { Country } from './Country';

@Component({
  selector: 'app-root',
  template: `
     <h1>Currency Converter</h1>
     <country-selector (select)="countrySelected($event)"></country-selector>
     <country-details *ngIf="selectedCountry!=undefined"  [country]="selectedCountry"></country-details>
    
  `
})
export class AppComponent {

  selectedCountry: Country;

  countrySelected(country) {
      this.selectedCountry = country;
      console.log("Hey: " + country);
  }
}
