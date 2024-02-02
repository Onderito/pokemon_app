import { Sprite } from './../types/pokemon';

export class SpriteDTO implements Sprite {
  regular: string | null;
  shiny: string | null;
  gmax: string | null;
  constructor(sprite: {
    regular: string | null;
    shiny: string | null;
    gmax: string | null;
  }) {
    this.regular = sprite.regular;
    this.shiny = sprite.shiny;
    this.gmax = sprite.gmax;
  }

  static fromJson(sprite: {
    regular: string | null;
    shiny: string | null;
    gmax: string | null;
  }) {
    return new SpriteDTO(sprite);
  }
}
