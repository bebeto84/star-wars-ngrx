import { createAction } from '@ngrx/store';
import { Movie } from './movie.model';

export namespace MovieAction {
  const PREFIX = '[Movie]';

  export const getAll = createAction(`${PREFIX} Get All`);
  export const getAllSuccess =
    createAction(`${PREFIX} Get All Success`, (movies: Movie[]) => ({ movies }));
  export const getAllFail = createAction(`${PREFIX} Get All Fail`);


  export const getDetail = createAction(`${PREFIX} Get Detail`);
  export const getDetailSuccess =
    createAction(`${PREFIX} Get Detail Success`, (movie: Movie) => ({ movie }));
  export const getDetailFail = createAction(`${PREFIX} Get Detail Fail`);
}
