import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EvidenceStatus } from '../../game-data/evidence-status';
import { Status } from '../../game-data/status';
import { MatButtonToggleChange } from '@angular/material';
import { Evidence } from '../../game-data/evidence';

interface EvidenceSelectOption {
  key: string;
  name: string;
}

@Component({
  selector: 'app-evidence-select',
  templateUrl: './evidence-select.component.html',
  styleUrls: ['./evidence-select.component.scss'],
})
export class EvidenceSelectComponent implements OnInit {
  @Input()
  evidenceStatus: EvidenceStatus;

  @Output()
  evidenceStatusChanged: EventEmitter<EvidenceStatus> = new EventEmitter<
    EvidenceStatus
  >();

  name: string;

  evidenceSelectOptions: EvidenceSelectOption[];

  ngOnInit(): void {
    this.name = Evidence[this.evidenceStatus.evidenceKey];
    this.evidenceSelectOptions = this.getEvidenceSelectOptions();
  }

  onEvidenceStatusChanged({
    value: selectedStatusKey,
  }: MatButtonToggleChange): void {
    this.evidenceStatus = {
      ...this.evidenceStatus,
      statusKey: selectedStatusKey,
    };
    this.evidenceStatusChanged.emit(this.evidenceStatus);
  }

  private getEvidenceSelectOptions(): EvidenceSelectOption[] {
    return Object.keys(Status).map((key: string) => ({
      key,
      name: Status[key],
    }));
  }
}
