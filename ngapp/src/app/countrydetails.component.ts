import { Component, EventEmitter, Output, Input } from "@angular/core";
import { Country } from './Country';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
    selector : 'country-details',
    template: `
        <h1>{{country.name}}</h1>
        <input type="number" #amount>
        <input type="button" value="convert" (click)="convert(amount.value)">
        <output>{{ convertedValue }} </output>
    `
})
export class CountryDetailsComponent {
     @Input() country : Country;
     convertedValue   : string;

     constructor(private http: Http) {}
     
     convert(value: string) {
        this.convertedValue = "...";

        this.http.get('http://api.fixer.io/latest?base=USD')
        /*
            .toPromise()
            .then(res => res.json().rates)
            .then(data => {
                const rate = data[this.country.currency];
                this.convertedValue = `${rate * parseFloat(value)}`;
            });
        */  
            .map(res => res.json().rates)
            .subscribe(data => {
                const rate = data[this.country.currency];
                this.convertedValue = `${rate * parseFloat(value)}`;
            });
     }
}