import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, interval } from 'rxjs';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

    private statesUrl = 'http://127.0.0.1:8000/';

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
                                                    'Authorization': "Basic " + btoa("admin:admin"),
                                                     })
    };

    constructor(private http: HttpClient) { }

    getStates (): Observable<State[]> {
        return this.http.get<State[]>(this.statesUrl + 'states/');
        
      }
    
    getState(id: number): Observable<State> {
        const url = `${this.statesUrl}state/${id}/`;
        return this.http.get<State>(url, this.httpOptions);
      }

    addState(state: State): Observable<State> {
        return this.http.post<State>(this.statesUrl + 'states/', state, this.httpOptions);
    }

    updateState(state: State): Observable<any> {
        return this.http.put(`${this.statesUrl}state/${state.id}/`, state, this.httpOptions);
    }

    deleteState(state: State | number): Observable<State> {
        const id = typeof state === 'number' ? state: state.id;
        const url = `${this.statesUrl}state/${id}/`;
        return this.http.delete<State>(url, this.httpOptions);
    }

 

}
