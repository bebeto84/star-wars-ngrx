export interface Character {
  name: string;
  height: number;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
}

export interface CharacterState {
  isBusy: boolean;
  current: Character;
}
