import { CharacterState } from './character.model';
import { createReducer, on } from '@ngrx/store';
import { CharacterAction } from './character.action';
import { updateState } from '../utils';

export const INITIAL_STATE: CharacterState = {
  isBusy: false,
  current: null
};

export const movieReducer = createReducer(
  INITIAL_STATE,

  on(CharacterAction.getDetail, (state) => updateState(state, {current: null, isBusy: true})),
  on(CharacterAction.getDetailSuccess, (state, { character }) => updateState(state, {current: character, isBusy: true})),
  on(CharacterAction.getDetailFail, (state) => updateState(state, {isBusy: false})),
);
