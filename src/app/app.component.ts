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
  ghosts: Ghost[];

  ngOnInit(): void {
    this.evidenceStates = this.createEvidenceStates();
    this.ghosts = GHOSTS;
  }

  evidenceStatesChanged(updatedEvidenceStats: EvidenceStatus[]) {
    this.evidenceStates = updatedEvidenceStats;
    console.log('updated', this.evidenceStates);
  }

  private createEvidenceStates(): EvidenceStatus[] {
    return Object.keys(Evidence).map(
      (key) => ({ evidenceKey: key, statusKey: 'UNKNOWN' } as EvidenceStatus)
    );
  }
}
