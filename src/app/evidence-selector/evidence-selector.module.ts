import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvidenceSelectorComponent} from './evidence-selector.component';
import {EvidenceSelectComponent} from './evidence-select/evidence-select.component';
import {MatButtonToggleModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [EvidenceSelectorComponent, EvidenceSelectComponent],
  imports: [CommonModule, MatButtonToggleModule, MatCardModule],
  exports: [EvidenceSelectorComponent],
})
export class EvidenceSelectorModule {
}
