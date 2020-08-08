import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
  },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'character-details/:id',
    loadChildren: () => import('./character-details/character-details.module').then(m => m.CharacterDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
