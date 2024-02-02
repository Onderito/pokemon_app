import { Talent } from '../types/pokemon';

export class TalentDTO implements Talent {
  name: string;
  tc: boolean;

  constructor(talent: { name: string; tc: boolean }) {
    this.name = talent.name;
    this.tc = talent.tc;
  }

  static fromJson(talent: { name: string; tc: boolean }) {
    return new TalentDTO(talent);
  }
}
