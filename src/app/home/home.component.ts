import { Component, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { HomeService } from './home.service';
import { PokemonJson } from '../../common/types/pokemon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FormsModule],
  providers: [HomeService],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // Injection de HomeService dans le composant
  constructor(private homeService: HomeService) {}
  // Déclaration des propriétés signal pour les données des Pokémon
  pokemon = signal<PokemonJson[]>([]);
  pokemonList = this.homeService.groupedPokemonList;
  search = '';

  ngOnInit() {
    // Récupération des données des Pokémon
    this.homeService.fetchPokemon().subscribe((value) => {
      value.shift(); // retrait de missigno le pokémon bug
      this.homeService.pokemonList.set(value);
      this.homeService.organizeCompletePokemonList();
      this.pokemon.set(this.pokemonList()[0]);
    });
  }
  // Méthode appelée lors du clique sur un bouton de page
  onChunkClick(index: number) {
    // Définit les données des pokemons actuels bases sur l'index du groupe selectionné
    this.pokemon.set(this.pokemonList()[index]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onGetByName(name: string) {
    if (!name || name === '') {
      this.pokemon.set(this.pokemonList()[0]);
      return;
    }
    this.pokemon.set(this.homeService.getByName(name));
  }
}
