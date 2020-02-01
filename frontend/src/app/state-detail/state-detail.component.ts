import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { State } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.css']
})
export class StateDetailComponent implements OnInit {
    @Input() state: State;

  constructor(private route: ActivatedRoute,
                    private http: StateService,
                    private location: Location ) { }

  ngOnInit() {
      this.getState();
  }

  getState(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.getState(id).subscribe(state => this.state = state);
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.http.updateState(this.state).subscribe(() => this.goBack());
  }

}
