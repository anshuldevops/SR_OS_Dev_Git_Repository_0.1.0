import { Injectable } from '@angular/core';
import { City } from './city';
import { State } from './state';

@Injectable()
export class DataService {
  getStates(){
      return[
      new State(1, 'Maharashtra'),
      new State(2, 'Rajasthan')
      ];
  }

  getCities(){
      return[
        new City(1, 1, 'Mumbai'),
        new City(2, 1, 'Pune'),
        new City(3, 1, 'Nagpur'),
        new City(4, 1, 'Nashik'),
        new City(5, 1, 'Kolhapur'),
        new City(6, 2, 'Jodhpur'),
        new City(7, 2, 'Jaipur'),
        new City(8, 2, 'Udaipur'),
        new City(9, 2, 'Kota'),
        new City(10, 2, 'Barmer')
      ];
  }
}
