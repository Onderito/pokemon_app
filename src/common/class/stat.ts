import { Stat } from './../types/pokemon';

export class StatDTO implements Stat {
  hp: Number | null;
  atk: Number | null;
  def: Number | null;
  speAtk: Number | null;
  speDef: Number | null;
  vit: Number | null;
  constructor(stat: {
    hp: Number | null;
    atk: Number | null;
    def: Number | null;
    speAtk: Number | null;
    speDef: Number | null;
    vit: Number | null;
  }) {
    this.hp = stat.hp ?? null;
    this.atk = stat.atk ?? null;
    this.def = stat.def ?? null;
    this.speAtk = stat.speAtk ?? null;
    this.speDef = stat.speDef ?? null;
    this.vit = stat.vit ?? null;
  }

  static fromJson(stat: {
    hp: Number | null;
    atk: Number | null;
    def: Number | null;
    spe_atk: Number | null;
    spe_def: Number | null;
    vit: Number | null;
  }) {
    return new StatDTO({ ...stat, speAtk: stat.spe_atk, speDef: stat.spe_def });
  }
}
