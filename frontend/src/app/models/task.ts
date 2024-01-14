import { IIdAble } from "./IIdAble";

export enum Status {
    NOT_STARTED = 'NOT_STARTED',
    STARTED = 'STARTED',
    COMPLETED = 'COMPLETED'
}

export class Task implements IIdAble {
    id?: number;
    title?: string;
    description?: string;
    status?: Status;
}
