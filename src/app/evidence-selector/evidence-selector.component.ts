import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EvidenceStatus } from '../game-data/evidence-status';

@Component({
  selector: 'app-evidence-selector',
  templateUrl: './evidence-selector.component.html',
  styleUrls: ['./evidence-selector.component.scss'],
})
export class EvidenceSelectorComponent {
  @Input()
  evidenceStates: EvidenceStatus[];

  @Output()
  evidenceStatesChanged: EventEmitter<EvidenceStatus[]> = new EventEmitter<
    EvidenceStatus[]
  >();

  constructor() {}

  onEvidenceStatesChanged(newEvidenceState: EvidenceStatus): void {
    this.evidenceStates = this.evidenceStates.map(
      (currentState: EvidenceStatus) =>
        currentState.evidenceKey === newEvidenceState.evidenceKey
          ? newEvidenceState
          : currentState
    );
    this.evidenceStatesChanged.emit(this.evidenceStates);
  }
}
