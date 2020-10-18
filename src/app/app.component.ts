import { Component, OnInit } from '@angular/core';
import { Evidence } from './game-data/evidence';
import { Ghost } from './game-data/ghost';
import { GHOSTS } from './game-data/GHOSTS';
import { EVIDENCES } from './game-data/EVIDENCES';
import { Status } from './game-data/status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  evidences: Evidence[];
  allGhosts: Ghost[];

  ngOnInit(): void {
    this.evidences = this.createEvidenceStates();
    this.allGhosts = GHOSTS;
  }

  evidenceStatesChanged(updatedEvidences: Evidence[]): void {
    this.evidences = updatedEvidences;
  }

  onResetEvidenceStates(): void {
    this.evidences = this.createEvidenceStates();
  }

  private createEvidenceStates(): Evidence[] {
    return EVIDENCES.map(evidence => ({...evidence, status: Status.UNKNOWN}))
  }
}
