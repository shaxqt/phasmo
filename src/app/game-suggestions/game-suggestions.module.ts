import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSuggestionsComponent } from './game-suggestions.component';
import { EvidenceSuggestionsComponent } from './evidence-suggestions/evidence-suggestions.component';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule } from '@angular/material';
import { GhostSuggestionsComponent } from './ghost-suggestions/ghost-suggestions.component';

@NgModule({
  declarations: [GameSuggestionsComponent, EvidenceSuggestionsComponent, GhostSuggestionsComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatExpansionModule, MatIconModule],
  exports: [GameSuggestionsComponent],
})
export class GameSuggestionsModule { }
