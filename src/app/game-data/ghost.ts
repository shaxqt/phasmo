import { Evidence } from './evidence';

export interface Ghost {
  name: string;
  neededEvidences: Evidence[];
}
