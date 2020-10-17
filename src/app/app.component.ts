import { Component, OnInit } from '@angular/core';
import { Evidence } from './game-data/evidence';
import { EvidenceStatus } from './game-data/evidence-status';
import { Ghost } from './game-data/ghost';
import { GHOSTS } from './game-data/GHOSTS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  evidenceStates: EvidenceStatus[];
  allGhosts: Ghost[];

  ngOnInit(): void {
    this.evidenceStates = this.createEvidenceStates();
    this.allGhosts = GHOSTS;
  }

  evidenceStatesChanged(updatedEvidenceStats: EvidenceStatus[]): void {
    this.evidenceStates = updatedEvidenceStats;
  }

  private createEvidenceStates(): EvidenceStatus[] {
    return Object.keys(Evidence).map(
      (key) => ({ evidenceKey: key, statusKey: 'UNKNOWN' } as EvidenceStatus)
    );
  }
}
