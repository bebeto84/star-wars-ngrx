import { EntityType } from './shared.model';

export function updateState<TState>(state: TState, changes: Partial<TState>): TState {
  return Object.assign({}, state, changes) as TState;
}

export const getIdFromUrl = (url: string, type: EntityType) => {
  const expression = new RegExp(`\/${type}\/(\d+)\/`);
  const [, value] =  url.match(expression);
  return value;
};

export const getIdsFromUrls = (urls: string[], type: EntityType) =>
  urls.map(url => getIdFromUrl(url, type));


