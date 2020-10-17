import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSuggestionsComponent } from './game-suggestions.component';
import { GhostSuggestionComponent } from './ghost-suggestions/ghost-suggestion/ghost-suggestion.component';
import {EvidenceSuggestionsComponent} from './evidence-suggestions/evidence-suggestions.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { GhostSuggestionsComponent } from './ghost-suggestions/ghost-suggestions.component';

@NgModule({
  declarations: [GameSuggestionsComponent, GhostSuggestionComponent, EvidenceSuggestionsComponent, GhostSuggestionsComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [GameSuggestionsComponent],
})
export class GameSuggestionsModule {}
