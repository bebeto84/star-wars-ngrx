const BASE = 'https://swapi.dev/api';

export const API: { endpoint: { films: string; characters: string } } = {
  endpoint: {
    films: `${BASE}/films`,
    characters: `${BASE}/people`,
  },
};
