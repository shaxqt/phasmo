import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ghost } from '../../../game-data/ghost';
import { EvidenceStatus } from '../../../game-data/evidence-status';
import { Status } from '../../../game-data/status';
import { Evidence } from '../../../game-data/evidence';

interface SuggestedEvidences {
  evidenceKeysToExclude: string[];
  evidenceKeysToProve: string[];
}

@Component({
  selector: 'app-evidence-suggestions',
  templateUrl: './evidence-suggestions.component.html',
  styleUrls: ['./evidence-suggestions.component.scss'],
})
export class EvidenceSuggestionsComponent implements OnChanges {
  @Input()
  evidenceStates: EvidenceStatus[];
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
    const unknownEvidences: EvidenceStatus[] = this.evidenceStates.filter(
      (evidence: EvidenceStatus) =>
        Status[evidence.statusKey] === Status.UNKNOWN
    );

    let prove: string[] = [];
    let exclude: string[] = [];
    if (unknownEvidences.length !== this.evidenceStates.length) {
      unknownEvidences.forEach((unknownEvidence: EvidenceStatus) => {
        let occurrenceCount = 0;
        this.ghosts.forEach((suggestedGhost: Ghost) => {
          if (
            suggestedGhost.neededEvidences.includes(
              Evidence[unknownEvidence.evidenceKey]
            )
          ) {
            occurrenceCount++;
          }
        });
        if (occurrenceCount === 1) {
          prove = [...prove, unknownEvidence.evidenceKey];
        } else if (occurrenceCount > 1) {
          exclude = [...exclude, unknownEvidence.evidenceKey];
        }
      });
    }
    return {
      evidenceKeysToExclude: exclude,
      evidenceKeysToProve: prove,
    };
  }
}
