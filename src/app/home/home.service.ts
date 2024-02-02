import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonJson } from '../../common/class/pokemon';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  pokemonList: PokemonJson[] = []; // liste de pokémon = contenu de la requête sous forme de tableau
  groupedPokemonList: Array<PokemonJson[]> = []; // un tableau de tableau de pokémon (tableau de 20 pokemon que l'on va insérer dans  groupedPokemonList)
  fetchPokemon() {
    return this.http.get<PokemonJson[]>(
      'https://tyradex.vercel.app/api/v1/pokemon'
    );
  }
  organizeCompletePokemonList() {
    let currentGroup: PokemonJson[] = []; // je déclare une variable qui contient un tableau vide
    // // On parcourt la liste complète des Pokémon
    this.pokemonList.forEach((pokemon, index) => {
      // Pour chaque Pokémon, sauf le dernier
      if (!(index === this.pokemonList.length - 1)) {
        // si le tableau  n'est pas encore plein (- de 20 pokémons)
        if (currentGroup.length < 50) {
          // ajoute le pokémon
          currentGroup.push(pokemon);
        } else {
          // si le tableau est plein, ajoute le au prochain.
          this.groupedPokemonList.push(currentGroup);
          // On réinitialise le groupe temporaire
          currentGroup = [];
          currentGroup.push(pokemon);
        }
      } else {
        currentGroup.push(pokemon);
        this.groupedPokemonList.push(currentGroup);
      }
    });
  }
}
