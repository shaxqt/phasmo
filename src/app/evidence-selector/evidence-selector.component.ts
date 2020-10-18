import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Evidence } from '../game-data/evidence';
import { Status } from '../game-data/status';

@Component({
  selector: 'app-evidence-selector',
  templateUrl: './evidence-selector.component.html',
  styleUrls: ['./evidence-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvidenceSelectorComponent {
  @Input()
  evidences: Evidence[];

  @Output()
  evidenceStatesChanged: EventEmitter<Evidence[]> = new EventEmitter<
    Evidence[]
  >();

  constructor() {}

  onEvidenceChanged(newEvidenceState: Evidence): void {
     this.evidences = this.evidences.map(
      (currentState: Evidence) =>
        currentState.type === newEvidenceState.type
          ? newEvidenceState
          : currentState
    );
    this.evidenceStatesChanged.emit(this.evidences);
  }
}
