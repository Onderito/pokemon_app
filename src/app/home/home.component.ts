import { Component, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HomeService } from './home.service';
import { PokemonJson } from '../../common/class/pokemon';

type GroupesPokemon = Array<PokemonJson[]>;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  providers: [HomeService],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // Injection de HomeService dans le composant
  constructor(private homeService: HomeService) {}
  // Déclaration des propriétés signal pour les données des Pokémon
  pokemon = signal<PokemonJson[]>([]);
  pokemonList = signal<GroupesPokemon>([]);

  ngOnInit() {
    // Récupération des données des Pokémon
    this.homeService.fetchPokemon().subscribe((value) => {
      this.homeService.pokemonList = value; // Assignation des données des Pokémon récupérées
      this.homeService.pokemonList.shift(); // Suppression du premier élément de la liste
      this.homeService.organizeCompletePokemonList();
      this.pokemonList.set(this.homeService.groupedPokemonList); // Définit la propriété signal pour la liste de Pokémon organisée en groupes
      this.pokemon.set(this.pokemonList()[0]); // Définit les données initiales des Pokémon pour le premier groupe
    });
  }
  // Méthode appelée lors du clique sur un bouton de page
  onChunkClick(index: number) {
    // Définit les données des pokemons actuels bases sur l'index du groupe selectionné
    this.pokemon.set(this.pokemonList()[index]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
