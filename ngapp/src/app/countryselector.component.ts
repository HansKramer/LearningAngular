import { Component, EventEmitter, Output } from "@angular/core";
import {Country} from './Country';
import { DataService } from './data.service';

@Component({
    selector : 'country-selector',
    providers: [DataService], 
    template: `
      <div>  
        <span>Country</span>
        <select #c (change)="optionSelected(c.value)">
            <option value="-1"  disabled selected hidden></option>
            <option [value]="i" *ngFor="let country of countries; let i=index">
                {{country.name}}
            </option>
        </select>
      </div>
    `
})
export class CountrySelectorComponent {
     countries: [Country];

     @Output('select') selectCountry = new EventEmitter<Country>();

     optionSelected(value) {
         if (value != -1) {
             let selectedCountry = this.countries[value];
             this.selectCountry.emit(selectedCountry);
         }  
     }

     constructor (private data : DataService) {
         this.countries = data.getCountries();
         
       
     }
}