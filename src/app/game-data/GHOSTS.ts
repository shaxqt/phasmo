import { Evidence } from './evidence';
import { Ghost } from './ghost';

export const GHOSTS: Ghost[] = [
  {
    name: 'Spirit',
    neededEvidences: [Evidence.BOOK, Evidence.BOX, Evidence.FINGERPRINT],
  },
  {
    name: 'Gespenst',
    neededEvidences: [Evidence.FREEZE, Evidence.BOX, Evidence.FINGERPRINT],
  },
  {
    name: 'Phantom',
    neededEvidences: [Evidence.FREEZE, Evidence.EMF, Evidence.ORB],
  },
  {
    name: 'Poltergeist',
    neededEvidences: [Evidence.ORB, Evidence.BOX, Evidence.FINGERPRINT],
  },
  {
    name: 'Banshee',
    neededEvidences: [Evidence.FREEZE, Evidence.EMF, Evidence.FINGERPRINT],
  },
  {
    name: 'Dschinn',
    neededEvidences: [Evidence.ORB, Evidence.BOX, Evidence.EMF],
  },
  {
    name: 'Mare',
    neededEvidences: [Evidence.ORB, Evidence.BOX, Evidence.FREEZE],
  },
  {
    name: 'Revenant',
    neededEvidences: [Evidence.EMF, Evidence.BOOK, Evidence.FINGERPRINT],
  },
  {
    name: 'Shade',
    neededEvidences: [Evidence.EMF, Evidence.ORB, Evidence.BOOK],
  },
  {
    name: 'Dämon',
    neededEvidences: [Evidence.BOOK, Evidence.BOOK, Evidence.FREEZE],
  },
  {
    name: 'Yurei',
    neededEvidences: [Evidence.BOOK, Evidence.FREEZE, Evidence.ORB],
  },
  {
    name: 'Oni',
    neededEvidences: [Evidence.EMF, Evidence.BOX, Evidence.BOOK],
  },
];
