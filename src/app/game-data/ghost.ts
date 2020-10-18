import { Evidence } from './evidence';

export interface Ghost {
  name: string;
  neededEvidences: Evidence[];
  desc: string;
  strength: string;
  weakness: string;
}
