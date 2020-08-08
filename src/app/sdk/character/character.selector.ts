import { CharacterState } from './character.model';
import { CoreSwapiState } from '../shared.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export namespace CharacterSelector {

  export const selectCharacterFeature = createFeatureSelector<CoreSwapiState, CharacterState>('character');

  export const selectIsBusy = createSelector(
    selectCharacterFeature,
    (state: CharacterState) => state.isBusy
  );

  export const selectCurrent = createSelector(
    selectCharacterFeature,
    (state: CharacterState) => state.current
  );

}
