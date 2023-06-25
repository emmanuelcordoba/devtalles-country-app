import {Component, OnInit} from '@angular/core';
import { Country } from "../../interfaces/country";
import { CountriesService } from "../../services/countries.service";

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public initialValue: string = '';
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countriesService.searchByCountry(term)
      .subscribe( countries => {
        this.countries = countries; console.log(countries);
        this.isLoading = false;
      });
  }
}
