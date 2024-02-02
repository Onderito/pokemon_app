import { Component, Input } from '@angular/core';
import { PokemonJson } from '../../common/types/pokemon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() name!: string;
  @Input() height!: string;
  @Input() weight!: string;
  @Input() category!: string;
  @Input() stats!: PokemonJson['stats'];
  @Input() sprites!: PokemonJson['sprites'];
  @Input() types!: PokemonJson['types'];
}
