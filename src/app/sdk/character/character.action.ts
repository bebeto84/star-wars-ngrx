import { createAction } from '@ngrx/store';
import { Character } from './character.model';

export namespace CharacterAction {
  const PREFIX = '[Character]';
  export const getDetail = createAction(`${PREFIX} Get Detail`);
  export const getDetailSuccess =
    createAction(`${PREFIX} Get Detail Success`, (character: Character) => ({ character }));
  export const getDetailFail = createAction(`${PREFIX} Get Detail Fail`);
}
