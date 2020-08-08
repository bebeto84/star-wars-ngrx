import { MovieState } from './movie.model';
import { CoreSwapiState } from '@sdk/shared.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { getIdFromUrl } from '@sdk/utils';

export namespace MovieSelector {

  export const selectMovieFeature = createFeatureSelector<CoreSwapiState, MovieState>('movie');

  export const selectAll = () => createSelector(
    selectMovieFeature,
    (state: MovieState) => state.movies
  );

  export const selectIsBusy = () => createSelector(
    selectMovieFeature,
    (state: MovieState) => state.isBusy
  );

  export const selectById = createSelector(
    selectMovieFeature,
    (state: MovieState, {id}) => state.movies
      .find(({url}) => getIdFromUrl(url, 'films') === id)
  );

  export const selectCurrent = createSelector(
    selectMovieFeature,
    (state: MovieState) => state.current
  );

}
