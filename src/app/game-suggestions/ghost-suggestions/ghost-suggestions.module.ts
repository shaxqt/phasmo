import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostSuggestionsComponent } from './ghost-suggestions.component';
import { GhostSuggestionComponent } from './ghost-suggestion/ghost-suggestion.component';
import {EvidenceSuggestionsModule} from './evidence-suggestions/evidence-suggestions.module';

@NgModule({
  declarations: [GhostSuggestionsComponent, GhostSuggestionComponent],
  imports: [CommonModule, EvidenceSuggestionsModule, EvidenceSuggestionsModule],
  exports: [GhostSuggestionsComponent],
})
export class GhostSuggestionsModule {}
