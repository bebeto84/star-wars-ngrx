import { MovieState } from './movie';
import { RouterReducerState } from '@ngrx/router-store';

export interface SwapiArrayResponse<T> {
  results: T;
}

export interface CoreSwapiState {
  movie: MovieState;
  router: RouterReducerState<any>;
}

export type EntityType = 'films' | 'characters';
