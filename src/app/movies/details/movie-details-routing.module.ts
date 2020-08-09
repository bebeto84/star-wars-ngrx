import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsContainer } from './movie-details.container';

const routes: Routes = [
  { path: '', component: MovieDetailsContainer, pathMatch: 'full'}
// TODO: Error control manually or not found id
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieDetailsRoutingModule { }
