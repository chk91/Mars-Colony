export class Encounter {
    constructor(
        public id: number,
        public date: string,
        public colonist_id: number,
        public atype: string,
        public action: string
    ) {}
}

export class Job {
    constructor(
        public name: string,
        public id: number,
        public description: string
    ) {}
}

export class Colonist {
    constructor(
        public name: string,
        public id: string,
        public age: number,
        public job: Job
    ) {}
}

export class Alien {
    constructor(
        public id: number,
        public type: string,
        public description: string,
        public submitted_by: string
    ) {}
}