import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap, take, concatMap, withLatestFrom } from 'rxjs/operators';
import { MovieService } from './movie.service';
import { MovieAction } from './movie.action';
import { CoreSwapiState } from '@sdk/shared.model';
import { Store, select } from '@ngrx/store';
import { RouterSelector} from '@sdk/router';
import { MovieSelector } from './movie.selector';

@Injectable()
export class MovieEffect {

  getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieAction.getAll),
      switchMap(() => this.movieService.getAll()),
      map(movies => MovieAction.getAllSuccess(movies)),
      catchError(() => of(MovieAction.getAllFail()))
    )
  );

  getMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieAction.getDetail),
      withLatestFrom(
        this.store.pipe(select(RouterSelector.selectRouteParams))
      ),
      concatMap(([, { id }]) => this.store.pipe(
        select(MovieSelector.selectById, { id }),
        switchMap(movie => !!movie ? of(movie) : this.movieService.getDetail(id)),
        take(1)
      )),
      map(movie => MovieAction.getDetailSuccess(movie)),
      catchError(() => of(MovieAction.getDetailFail()))
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService,
    private store: Store<CoreSwapiState>
    ) {}
}
