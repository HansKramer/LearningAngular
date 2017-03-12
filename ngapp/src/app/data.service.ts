import { Country } from './Country';
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    getCountries() : [Country] { 
          return [
             new Country("Holland", "EUR"), 
             new Country("Mexico", "MXN"),
             new Country("Japan", "JPY")
        ];
     } 
};