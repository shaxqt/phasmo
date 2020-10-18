import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvidenceSelectComponent implements OnInit {


  /**
   * The EvidenceStatus to show and select on
   */
  @Input()
  evidenceStatus: EvidenceStatus;

  /**
   * The updated EvidenceStatus when statusKey changed
   */
  @Output()
  evidenceStatusChanged: EventEmitter<EvidenceStatus> = new EventEmitter<
    EvidenceStatus
  >();

  /**
   * Name of the evidence e.G. 'Ghostwriting
   */
  name: string;

  /**
   * Status key of the inital evidenceStatus
   */
  initialEvidenceStatusKey: string;

  /**
   * List with all states to select (unkown, proven, unlikely)
   */
  evidenceSelectOptions: EvidenceSelectOption[];

  ngOnInit(): void {
    // set initial values to prevent to much rerender (mat toggle group will set it's value itself)
    this.name = Evidence[this.evidenceStatus.evidenceKey];
    this.evidenceSelectOptions = this.getEvidenceSelectOptions();
    this.initialEvidenceStatusKey = this.evidenceStatus.statusKey;
  }

  /**
   * changes and emits state
   * @param value Key of the selected status
   */
  onEvidenceStatusChanged({
    value: selectedStatusKey,
  }: MatButtonToggleChange): void {
    this.evidenceStatus.statusKey = selectedStatusKey;
    this.evidenceStatusChanged.emit(this.evidenceStatus);
  }

  private getEvidenceSelectOptions(): EvidenceSelectOption[] {
    return Object.keys(Status).map((key: string) => ({
      key,
      name: Status[key],
    }));
  }
}
