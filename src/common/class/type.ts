import { Type } from '../types/pokemon';

export class TypeDTO implements Type {
  name: string;
  image: string;
  constructor(types: { name: string; image: string }) {
    this.name = types.name;
    this.image = types.image;
  }

  static fromJson(types: { name: string; image: string }) {
    return new TypeDTO(types);
  }
}
