import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, switchMap, tap, take } from 'rxjs/operators';
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
      tap(movie => {debugger}),
      withLatestFrom(
        this.store.pipe(select(RouterSelector.selectRouteParams))
      ),
      tap(movie => {debugger}),
      switchMap(([, {id}]) => this.store.pipe(
        select(MovieSelector.selectById, { id }),
        tap(movie => {debugger}),
        switchMap(movie => !!movie ? of(movie) : this.movieService.getDetail(id)),
        tap(movie => {debugger}),
      )),
      map(movie => MovieAction.getDetailSuccess(movie)),
      catchError(() => of(MovieAction.getDetailFail()))

   /*    mergeMap(() => this.movieService.getAll()),
      map(movies => MovieAction.getAllSuccess(movies)),
      catchError(() => of(MovieAction.getAllFail())) */
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService,
    private store: Store<CoreSwapiState>
    ) {}
}
