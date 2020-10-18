import { Evidence } from './evidence';
import { EvidenceEnum } from './evidence-enum';

 export const EVIDENCES: Evidence[] = [
  {
    type: EvidenceEnum.EMF,
    name: `EMF Level 5`,
    desc: `Some Ghosts will leave EMF traces near them that will show up on an EMF Reader as level 5.`,
    icon: 'wifi_tethering'
  },
  {
    type: EvidenceEnum.BOX,
    name: `Spirit Box`,
    desc: `Only certain ghosts will talk through a Spirit Box when asked a question with you voice. Make sure the lights are off.`,
    icon: 'speaker_phone'
  },
  {
    type: EvidenceEnum.FREEZE,
    name: `Freezing Temperatures`,
    desc: `All ghosts make areas cold however some ghosts have been known to drop temperatures even further.`,
    icon: 'ac_unit'
  },
  {
    type: EvidenceEnum.FINGERPRINT,
    name: `Fingerprints`,
    desc: `Some Ghosts have been known to leave fingerprints on doors, windows and light switches. This will show up with a UV Light.`,
    icon: 'fingerprint'
  },
  {
    type: EvidenceEnum.ORB,
    name: `Ghost Orb`,
    desc: `The classis paranormal evidence however not all ghosts have one. This will be visible on a camera.`,
    icon: 'lens'
  },
  {
    type: EvidenceEnum.BOOK,
    name: `Ghost Writing Book`,
    desc: `Some Ghosts are able to write inside this book if placed nearby. Paranormal investigators started using pen and paper as an alternative form of communication to the Spirit Box. It was later discovered that only certain types of Ghosts will write.`,
    icon: 'book'
  },
];
