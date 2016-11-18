export class Encounters {
    constructor(
        public id: number,
        public date: string,
        public colonist_id: number,
        public atype: string,
        public action: string
    ) {}
}

export interface Job {
        name: string,
        id: number,
        description: string
}

export class NewColonist {
    constructor(
        public name: string,
        public age: number,
        public job_id: string
    ) {}
}

export interface Colonist {
        name: string,
        id: string,
        age: number,
        job: Job

}

export interface Aliens {
        id: number,
        type: string,
        description: string,
        submitted_by: string
}

export class NewEncounter {
    constructor(
        public date: string,
        public atype: string,
        public action: string,
        public colonist_id: number

    ) {}
}

export interface Encounter {
    date: string,
    colonist_id: number,
    atype: string,
    action: string,
    id: number

}