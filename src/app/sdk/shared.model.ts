import { CharacterState } from './character';
import { MovieState } from './movie';
import { RouterReducerState } from '@ngrx/router-store';

export interface SwapiArrayResponse<T> {
  results: T;
}

export interface CoreSwapiState {
  movie: MovieState;
  router: RouterReducerState<any>;
  character: CharacterState;
}

export type EntityType = 'films' | 'characters';
