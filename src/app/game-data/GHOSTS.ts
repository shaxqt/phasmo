import { EvidenceEnum } from './evidence-enum';
import { Ghost } from './ghost';

export const GHOSTS: Ghost[] = [
  {
    name: 'Spirit',
    neededEvidences: [EvidenceEnum.BOOK, EvidenceEnum.BOX, EvidenceEnum.FINGERPRINT],
    desc: `A spirit is the most common Ghost you will come across however it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.`,
    strength: `Nothing`,
    weakness: `Using Smudge Sticks on a Spirit will stop it attacking for a long period of time.`,
  },
  {
    name: 'Wraith',
    neededEvidences: [EvidenceEnum.FREEZE, EvidenceEnum.BOX, EvidenceEnum.FINGERPRINT],
    desc: `A wraith is one of the most dangerous Ghosts you will find. It is also the only known Ghost that has the ability of flight and has sometimes been known to travel through walls.`,
    strength: `Wraiths almost never touch the ground meaning it can’t be tracked by footsteps.`,
    weakness: `Wraiths have a toxic reaction to Salt.`,
  },
  {
    name: 'Phantom',
    neededEvidences: [EvidenceEnum.FREEZE, EvidenceEnum.EMF, EvidenceEnum.ORB],
    desc: `A Phantom is a Ghost that can possess the living, most commonly summoned by a Ouija Board. It also induces fear into those around it.`,
    strength: `Looking at a Phantom will considerably drop your sanity.`,
    weakness: `Taking a photo of the Phantom will make it temporarily disappear.`,
  },
  {
    name: 'Poltergeist',
    neededEvidences: [EvidenceEnum.ORB, EvidenceEnum.BOX, EvidenceEnum.FINGERPRINT],
    desc: `One of the most famous Ghosts, a Poltergeist, also known as a noisy ghost can manipulate objects around it to spread fear into it’s victims.`,
    strength: `A Poltergeist can throw huge amounts of objects at once.`,
    weakness: `A Poltergeist is almost ineffective in an empty room.`,
  },
  {
    name: 'Banshee',
    neededEvidences: [EvidenceEnum.FREEZE, EvidenceEnum.EMF, EvidenceEnum.FINGERPRINT],
    desc: `A Banshee is a natural hunter and will attack anything. It has been known to stalk it’s prey one at a time until making it’s kill.`,
    strength: `A Banshee will only target one person at a time.`,
    weakness: `Banshees feat the Crucifix and will be less aggressive when near one.`,
  },
  {
    name: 'Jinn',
    neededEvidences: [EvidenceEnum.ORB, EvidenceEnum.BOX, EvidenceEnum.EMF],
    desc: `A Jinn is a territorial Ghost that will attack when threatened. It has also been known to be able to travel at significant speed.`,
    strength: `A Jinn will travel at a faster speed if it’s victim is far away.`,
    weakness: `Turning off the locations power source will prevent the Jinn from using it’s ability.`,
  },
  {
    name: 'Mare',
    neededEvidences: [EvidenceEnum.ORB, EvidenceEnum.BOX, EvidenceEnum.FREEZE],
    desc: `A Mare is the source of all nightmares, making it most powerful in the dark.`,
    strength: `A Mare will have an increased chance to attack in the dark.`,
    weakness: `Turning the lights on around the Mare will lower it’s chance to attack.`,
  },
  {
    name: 'Revenant',
    neededEvidences: [EvidenceEnum.EMF, EvidenceEnum.BOOK, EvidenceEnum.FINGERPRINT],
    desc: `A Revenant is a slow but violent Ghost that will attack indiscriminately. It has been rumored to travel at a significantly high speed when hunting.`,
    strength: `A Revenant will travel at a significantly faster speed when hunting a victim`,
    weakness: `Hiding from the Revenant will cause it to move very slowly.`,
  },
  {
    name: 'Shade',
    neededEvidences: [EvidenceEnum.EMF, EvidenceEnum.ORB, EvidenceEnum.BOOK],
    desc: `A Shade is known to be a Shy Ghost. There is evidence that a Shade will stop all paranormal activity if there are multiple people nearby.`,
    strength: `Being shy means the ghost will be harder to find.`,
    weakness: `The Ghost will not enter hunting mode if there are multiply people nearby.`,
  },
  {
    name: 'Demon',
    neededEvidences: [EvidenceEnum.BOX, EvidenceEnum.BOOK, EvidenceEnum.FREEZE],
    desc: `A Demon is one of the worst Ghosts you can encounter. It has been known to attack without a reason.`,
    strength: `Demons will attack more often than any other Ghost.`,
    weakness: `Asking a Demon successful questions on the Ouija Board won’t lower the users sanity.`,
  },
  {
    name: 'Yurei',
    neededEvidences: [EvidenceEnum.BOOK, EvidenceEnum.FREEZE, EvidenceEnum.ORB],
    desc: `A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.`,
    strength: `Yurei’s have been known to have a stronger effect on people’s sanity.`,
    weakness: `Smudging the Yurei’s room will cause it to not wander around the location for a long time.`,
  },
  {
    name: 'Oni',
    neededEvidences: [EvidenceEnum.EMF, EvidenceEnum.BOX, EvidenceEnum.BOOK],
    desc: `Oni’s are a cousin to the Demon and possess extreme strength. There have been rumors that they become more active around their prey.`,
    strength: `Oni’s are more active when people are nearby and have been seen moving objects at great speed.`,
    weakness: `Being more active will make the Oni easier to find and identify.`,
  },
];
