import { MovieState, Movie } from './movie.model';
import { createReducer, on } from '@ngrx/store';
import { MovieAction } from './movie.action';
import { updateState } from '../utils';

export const INITIAL_STATE: MovieState = {
  movies: [],
  isBusy: false,
  current: null
};

export const movieReducer = createReducer(
  INITIAL_STATE,
  on(MovieAction.getAll, (state) => updateState(state, {isBusy: true, current: null})),
  on(MovieAction.getAllSuccess, (state, { movies }) => updateState(state, { movies, isBusy: false})),
  on(MovieAction.getAllFail, (state) => updateState(state, {isBusy: false})),

  on(MovieAction.getDetail, (state) => updateState(state, {isBusy: true})),
  on(MovieAction.getDetailSuccess, (state, { movie }) =>
    updateState(state, { movies: [ ...state.movies, movie ], isBusy: false, current: movie})),
  on(MovieAction.getDetailFail, (state) => updateState(state, {isBusy: false})),
);
