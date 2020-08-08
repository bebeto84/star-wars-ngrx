import { EntityType } from './shared.model';

export function updateState<TState>(state: TState, changes: Partial<TState>): TState {
  return Object.assign({}, state, changes) as TState;
}

export const getIdFilmsFromUrl = (url: string, type: EntityType) => {
  const [, value] =  url.match(/\/films\/(\d+)\//);
  return value;
};
