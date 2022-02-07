import { WallModal } from "./Wall";

export interface CityModal {
  countryId?: number;
  cityId?: number;
  cityName?: string;
  wall?: any;
}

export class City {
  cityDetails!: CityModal;

  constructor(cityModal: CityModal) {
    this.cityDetails = cityModal;
    console.log("walls ", this.cityDetails);
  }

  getCities() {
    return {
      cities: this.cityDetails,
    };
  }
}
