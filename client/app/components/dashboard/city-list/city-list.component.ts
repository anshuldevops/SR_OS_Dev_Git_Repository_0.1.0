import { Component } from '@angular/core';
import { DataService } from './data-service';
import { City } from './city';
import { State } from './state';

@Component({
  selector: 'filter-app',
  templateUrl: './app/components/dashboard/city-list/searchable-sidebar.html',
  providers: [DataService]
})
export class CityListComponent {
  selectedState:State = new State(0, 'Maharashtra');
  cities: City[];
  states: State[];

  constructor(private _dataService: DataService) {
    this.states = this._dataService.getStates();
  }

  onSelect(state_id) {
    this.cities = this._dataService.getCities().filter((item)=> item.state_id == state_id);
  }

  performSearch(name: string){

  }
}
