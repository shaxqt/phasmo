import { Component, Input } from '@angular/core';
import { Ghost } from '../../../game-data/ghost';

@Component({
  selector: 'app-ghost-suggestion',
  templateUrl: './ghost-suggestion.component.html',
  styleUrls: ['./ghost-suggestion.component.scss'],
})
export class GhostSuggestionComponent {
  @Input()
  ghost: Ghost;

  constructor() {}
}
