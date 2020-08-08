import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { CharacterService } from './character.service';
import { CharacterAction } from './character.action';
import { CoreSwapiState } from '@sdk/shared.model';
import { Store, select } from '@ngrx/store';
import { RouterSelector} from '@sdk/router';

@Injectable()
export class MovieEffect {

  getMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterAction.getDetail),
      withLatestFrom(
        this.store.pipe(select(RouterSelector.selectRouteParams))
      ),
      switchMap(([, { id }]) => this.characterService.getDetail(id)),
      map(character => CharacterAction.getDetailSuccess(character)),
      catchError(() => of(CharacterAction.getDetailFail()))
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterService,
    private store: Store<CoreSwapiState>
    ) {}
}
