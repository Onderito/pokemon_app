export interface Pokemon {
  id: Number; // id unique du Pokemon
  category: string; // Catégorie du Pokémon
  name: string;
  type: Type[]; // tableau des types de pokémon
  talent: Talent[]; // tableau des talents du pokémon
  height: string;
  weight: string;
  stats: Stat;
  resistances: Resistance[]; // Tableau des résistances du Pokémon
}

export interface Type {
  name: string; // Nom du type (par exemple, "Plante", "Poison", etc.)
  image: string; // URL de l'image représentant le type
}

export interface Talent {
  name: string;
  tc: boolean;
}

export interface Stat {
  hp: Number | null;
  atk: Number | null;
  def: Number | null;
  speAtk: Number | null;
  speDef: Number | null;
  vit: Number | null;
}

export interface Resistance {
  name: string;
  multiplier: Number;
}

export interface Sprite {
  regular: string | null;
  shiny: string | null;
  gmax: string | null;
}

export type GroupesPokemon = Array<PokemonJson[]>;

export interface PokemonJson {
  pokedexId: Number;
  category: string;
  name: {
    fr: string;
    en: string;
    jp: string;
  };
  sprites: Sprite;
  types: Type[];
  talent: Talent[];
  height: string;
  weight: string;
  resistances: Resistance[];
  stats: {
    hp: Number | null;
    atk: Number | null;
    def: Number | null;
    spe_atk: Number | null;
    spe_def: Number | null;
    vit: Number | null;
  };
}
