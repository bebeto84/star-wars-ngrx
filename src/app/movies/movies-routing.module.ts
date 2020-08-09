import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesContainer } from './movies.container';

const routes: Routes = [
  { path: '', component: MoviesContainer, pathMatch: 'full'},

{
    path: 'details/:id',
    loadChildren: () =>
      import('./details/movie-details.module').then((m) => m.MovieDetailsModule)
  }

// TODO: Error control manually or not found id
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
