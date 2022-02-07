import { CityModal } from "./City";

export interface CountryModal {
  countryId?: number;
  countryName?: string;
  cities?: CityModal;
}

export class Country {
  countryDetails!: CountryModal;

  constructor(country: CountryModal) {
    this.countryDetails = country;
  }

  getCountry() {
    return {
      country: this.countryDetails,
    };
  }
}
