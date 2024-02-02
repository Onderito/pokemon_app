import { Resistance } from '../types/pokemon';
// on importe l'interface resistance depuis le fichier pokemon.ts

// On définit une classe ResistanceDTO qui implémente l'interface Resistance
export class ResistanceDTO implements Resistance {
  name: string; // On recupère les propriétés de Resistance
  multiplier: Number;

  // Constructor prenant en paramètre "resistance" avec les propriétés.
  constructor(resistance: { name: string; multiplier: Number }) {
    this.name = resistance.name; // this.name fait référence à la propriété name de la classe ResistanceDTO et resistance.name de l'objet resistance
    this.multiplier = resistance.multiplier;
  }

  // Méthode statique pour créer une instance de ResistanceDTO au format JSON.
  // Cette méthode prend un objet représentant les données JSON d'une résistance.
  static fromJson(resistance: { name: string; multiplier: Number }) {
    // et renvoie une nouvelle instance de ResistanceDTO avec les valeurs appropriées.
    return new ResistanceDTO(resistance);
  }
}
