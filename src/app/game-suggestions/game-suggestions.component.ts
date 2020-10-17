import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EvidenceStatus } from '../game-data/evidence-status';
import { Ghost } from '../game-data/ghost';
import { Evidence } from '../game-data/evidence';
import { Status } from '../game-data/status';

@Component({
  selector: 'app-game-suggestions',
  templateUrl: './game-suggestions.component.html',
  styleUrls: ['./game-suggestions.component.scss'],
})
export class GameSuggestionsComponent implements OnChanges {
  @Input()
  evidenceStates: EvidenceStatus[];

  @Input()
  allGhosts: Ghost[];

  @Output()
  resetEvidenceStates: EventEmitter<any> = new EventEmitter<any>();

  suggestedGhosts: Ghost[];

  constructor() {}

  ngOnChanges({ evidenceStates, ghosts }: SimpleChanges): void {
    if (evidenceStates || ghosts) {
      this.suggestedGhosts = this.getSuggestedGhosts();
    }
  }

  private getSuggestedGhosts(): Ghost[] {
    const provenGhosts = this.getProvenGhosts(
      this.allGhosts,
      this.evidenceStates
    );
    return this.getGhostsWithoutUnlikely(provenGhosts, this.evidenceStates);
  }

  private getProvenGhosts(
    ghosts: Ghost[],
    evidenceStates: EvidenceStatus[]
  ): Ghost[] {
    const provenEvidences: EvidenceStatus[] = evidenceStates.filter(
      (evidence: EvidenceStatus) => Status[evidence.statusKey] === Status.PROVEN
    );
    return ghosts.filter((ghost) =>
      provenEvidences.every((provenEvidence: EvidenceStatus) =>
        ghost.neededEvidences.includes(Evidence[provenEvidence.evidenceKey])
      )
    );
  }

  private getGhostsWithoutUnlikely(
    ghosts: Ghost[],
    evidenceStates: EvidenceStatus[]
  ): Ghost[] {
    const unlikelyEvidences: EvidenceStatus[] = evidenceStates.filter(
      (evidence: EvidenceStatus) =>
        Status[evidence.statusKey] === Status.UNLIKELY
    );
    return ghosts.filter(
      (ghost: Ghost) =>
        !unlikelyEvidences.some((unlikelyEvidence: EvidenceStatus) =>
          ghost.neededEvidences.includes(Evidence[unlikelyEvidence.evidenceKey])
        )
    );
  }
}
