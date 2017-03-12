import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountrySelectorComponent } from './countryselector.component';
import { CountryDetailsComponent  } from './countrydetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
