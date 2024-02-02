import {
  Pokemon,
  Resistance,
  Stat,
  Talent,
  Type,
  Sprite,
} from '../types/pokemon';
import { StatDTO } from './stat';
import { ResistanceDTO } from './resistance';
import { TypeDTO } from './type';
import { SpriteDTO } from './sprite';
import { TalentDTO } from './talent';

export class PokemonDTO implements Pokemon {
  static fromJson(pokemon: PokemonJson): any {
    throw new Error('Method not implemented.');
  }
  id: Number;
  category: string;
  name: string;
  type: Type[];
  talent: Talent[];
  height: string;
  weight: string;
  stats: Stat;
  resistances: Resistance[];
  sprites: Sprite[];

  constructor(pokemon: {
    id: Number;
    category: string;
    name: string;
    type: Type[];
    talent: Talent[];
    height: string;
    weight: string;
    stats: Stat;
    resistances: Resistance[];
    sprites: Sprite[];
  }) {
    this.id = pokemon.id;
    this.category = pokemon.category;
    this.name = pokemon.name;
    this.type = pokemon.type;
    this.talent = pokemon.talent;
    this.height = pokemon.height;
    this.weight = pokemon.weight;
    this.stats = pokemon.stats;
    this.resistances = pokemon.resistances;
    this.sprites = pokemon.sprites;
  }

  /*   static fromJson(pokemon: PokemonJson) {
    const stats = StatDTO.fromJson(pokemon.stats);
    const resistances = pokemon.resistances.map((p) =>
      ResistanceDTO.fromJson({ mutiplier: p.multiplier, name: p.name })
    );
    const sprites = pokemon.sprites.map((p) => SpriteDTO.fromJson(p));
    const type = pokemon.type.map((p) => TypeDTO.fromJson(p));
    const talent = pokemon.talent.map((p) => TalentDTO.fromJson(p));
    return new PokemonDTO({
      id: pokemon.pokedexId,
      category: pokemon.category,
      name: pokemon.name.fr,
      type,
      talent,
      height: pokemon.height,
      weight: pokemon.weight,
      stats,
      resistances,
      sprites,
    });
  } */
}

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
