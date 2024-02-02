import {
  Pokemon,
  Resistance,
  Stat,
  Talent,
  Type,
  Sprite,
  PokemonJson,
} from '../types/pokemon';
import { StatDTO } from './stat';
import { ResistanceDTO } from './resistance';
import { TypeDTO } from './type';
import { SpriteDTO } from './sprite';
import { TalentDTO } from './talent';

export class PokemonDTO implements Pokemon {
  id: Number;
  category: string;
  name: string;
  type: Type[];
  talent: Talent[];
  height: string;
  weight: string;
  stats: Stat;
  resistances: Resistance[];
  sprites: Sprite;

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
    sprites: Sprite;
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

  static fromJson(pokemon: PokemonJson) {
    const stats = StatDTO.fromJson(pokemon.stats);
    const resistances = pokemon.resistances.map((p) =>
      ResistanceDTO.fromJson({ multiplier: p.multiplier, name: p.name })
    );
    const sprites = SpriteDTO.fromJson(pokemon.sprites);
    const type = pokemon.types.map((p) => TypeDTO.fromJson(p));
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
  }
}
