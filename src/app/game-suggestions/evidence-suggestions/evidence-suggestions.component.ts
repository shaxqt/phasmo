import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ghost } from '../../game-data/ghost';
import { Status } from '../../game-data/status';
import { Evidence } from '../../game-data/evidence';

interface SuggestedEvidences {
  evidenceKeysToExclude: Evidence[];
  evidenceKeysToProve: Evidence[];
}

@Component({
  selector: 'app-evidence-suggestions',
  templateUrl: './evidence-suggestions.component.html',
  styleUrls: ['./evidence-suggestions.component.scss'],
})
export class EvidenceSuggestionsComponent implements OnChanges {
  @Input()
  evidences: Evidence[];
  @Input()
  ghosts: Ghost[];
  suggestedEvidences: SuggestedEvidences = {
    evidenceKeysToExclude: [],
    evidenceKeysToProve: [],
  };

  // TODO: layout jumps because of it's centered and the width chages with showen/suggested ghosts

  constructor() {}

  ngOnChanges({ evidenceStates, ghosts }: SimpleChanges): void {
    if (evidenceStates || ghosts) {
      this.suggestedEvidences = this.getSuggestedEvidences();
    }
  }

  private getSuggestedEvidences(): SuggestedEvidences {
    const unknownEvidences: Evidence[] = this.evidences.filter(
      (evidence: Evidence) =>
        evidence.status === Status.UNKNOWN
    );

    let prove: Evidence[] = [];
    let exclude: Evidence[] = [];
    if (unknownEvidences.length !== this.evidences.length) {
      unknownEvidences.forEach((unknownEvidence: Evidence) => {
        let occurrenceCount = 0;
        this.ghosts.forEach((suggestedGhost: Ghost) => {
          if (
            suggestedGhost.neededEvidences.includes(
              unknownEvidence.type
            )
          ) {
            occurrenceCount++;
          }
        });
        if (occurrenceCount === 1) {
          prove = [...prove, unknownEvidence];
        } else if (occurrenceCount > 1) {
          exclude = [...exclude, unknownEvidence];
        }
      });
    }
    return {
      evidenceKeysToExclude: exclude,
      evidenceKeysToProve: prove,
    };
  }
}
