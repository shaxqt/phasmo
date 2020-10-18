import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Status } from '../../game-data/status';
import { MatButtonToggleChange } from '@angular/material';
import { Evidence } from '../../game-data/evidence';


@Component({
  selector: 'app-evidence-select',
  templateUrl: './evidence-select.component.html',
  styleUrls: ['./evidence-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvidenceSelectComponent implements OnInit {

  @Input()
  evidence: Evidence;

  @Output()
  evidenceChanged: EventEmitter<Evidence> = new EventEmitter<
    Evidence
  >();

  initialStatusKey: string;
  evidenceSelectOptions: string[];

  ngOnInit(): void {
    this.initialStatusKey = Status[this.evidence.status];
    this.evidenceSelectOptions = this.getEvidenceSelectOptions();
  }

  onEvidenceChanged({
   value: newEvidenceStatus
  }: MatButtonToggleChange): void {
    this.evidence.status = newEvidenceStatus;
    this.evidenceChanged.emit(this.evidence);
  }

  private getEvidenceSelectOptions(): string[] {
    return Object.keys(Status).map((key: string) => (
      Status[key]
    ));
  }
}
