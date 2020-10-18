import { Component, Input } from '@angular/core';
import { Evidence } from 'src/app/game-data/evidence';
import { Ghost } from '../../game-data/ghost';

@Component({
  selector: 'app-ghost-suggestions',
  templateUrl: './ghost-suggestions.component.html',
  styleUrls: ['./ghost-suggestions.component.scss'],
})
export class GhostSuggestionsComponent {
  @Input()
  suggestedGhosts: Ghost[] = [];
  @Input()
  evidences: Evidence[];

  constructor() {}

  getEvidenceIcon(key: number) {
    const evidences = this.evidences.filter(evidence => evidence.type === key)
    if(evidences.length > 0) {
      return evidences[0].icon
    }
    return 'error'
  }
}
