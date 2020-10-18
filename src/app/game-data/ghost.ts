import { EvidenceEnum } from './evidence-enum';

export interface Ghost {
  name: string;
  neededEvidences: EvidenceEnum[];
  desc: string;
  strength: string;
  weakness: string;
}
