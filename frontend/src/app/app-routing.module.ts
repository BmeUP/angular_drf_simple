import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesComponent } from './states/states.component';
import { StateDetailComponent } from './state-detail/state-detail.component';


const routes: Routes = [
    {path: 'state', component: StatesComponent},
    {path: 'state/:id', component: StateDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
