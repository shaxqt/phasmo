import {EvidenceEnum} from './evidence-enum'
import { Status } from './status';
export interface Evidence {
    type: EvidenceEnum;
    name: string;
    desc: string;
    icon: string;
    status?: Status;
}
