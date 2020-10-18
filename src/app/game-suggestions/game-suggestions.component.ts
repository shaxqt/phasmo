import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  evidences: Evidence[];

  @Input()
  allGhosts: Ghost[];

  @Output()
  resetEvidenceStates: EventEmitter<any> = new EventEmitter<any>();

  suggestedGhosts: Ghost[] = [];

  constructor() {}

  ngOnChanges({ evidences, ghosts }: SimpleChanges): void {
    if (evidences || ghosts) {
      this.suggestedGhosts = this.getSuggestedGhosts();
    }
  }

  private getSuggestedGhosts(): Ghost[] {
    if(this.suggestedGhosts && this.evidences) {
    const provenGhosts = this.getProvenGhosts(
      this.allGhosts,
      this.evidences
    );
    return this.getGhostsWithoutUnlikely(provenGhosts, this.evidences);
    }
    return [];
  }

  private getProvenGhosts(
    ghosts: Ghost[],
    evidences: Evidence[]
  ): Ghost[] {
    const provenEvidences = this.filterByStatus(evidences, Status.PROVEN)
    return ghosts.filter((ghost) =>
      provenEvidences.every((provenEvidence: Evidence) =>
        ghost.neededEvidences.includes(provenEvidence.type)
      )
    );
  }

  private getGhostsWithoutUnlikely(
    ghosts: Ghost[],
    evidences: Evidence[]
  ): Ghost[] {
    const unlikelyEvidences = this.filterByStatus(evidences, Status.UNLIKELY)
    return ghosts.filter(
      (ghost: Ghost) =>
        !unlikelyEvidences.some((unlikelyEvidence: Evidence) =>
          ghost.neededEvidences.includes(unlikelyEvidence.type)
        )
    );
  }

  private filterByStatus(evidences: Evidence[], status: Status): Evidence[] {
    return evidences.filter(
      (evidence: Evidence) =>
       evidence.status === status
    );
  }
}
