import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EvidenceSuggestionsComponent} from './evidence-suggestions.component';



@NgModule({
  declarations: [EvidenceSuggestionsComponent],
  imports: [
    CommonModule
  ],
  exports: [EvidenceSuggestionsComponent]
})
export class EvidenceSuggestionsModule { }
