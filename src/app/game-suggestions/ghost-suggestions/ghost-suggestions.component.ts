import { Component, Input } from '@angular/core';
import { Ghost } from '../../game-data/ghost';

@Component({
  selector: 'app-ghost-suggestions',
  templateUrl: './ghost-suggestions.component.html',
  styleUrls: ['./ghost-suggestions.component.scss'],
})
export class GhostSuggestionsComponent {
  @Input()
  suggestedGhosts: Ghost[] = [];

  constructor() {}
}
