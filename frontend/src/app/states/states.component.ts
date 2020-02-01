import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { State } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

    selectedState: State;
    states: State[];
    

  constructor(private stateService: StateService) { }

  ngOnInit() {
      this.getStates();
  }
  
  onSelect(state: State): void {
    this.selectedState = state;
  }

  getStates(): void {
    this.stateService.getStates().subscribe(states => this.states = states );
  }

  add(title: string, code: string) {
    title = title.trim();
    code = code.trim();
    if (!title && !code) {return;}
    this.stateService.addState({title, code} as State).subscribe(state => {this.states.push(state)});
}

  delete(state: State): void {
    this.states = this.states.filter(h => h !== state);
    this.stateService.deleteState(state).subscribe();
  }


}
