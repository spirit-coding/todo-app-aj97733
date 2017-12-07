export class Todo {
    _id: string;
    completeDate: Date;
    createdDate: Date;

    constructor(public title: string,
        public completed: boolean,
        public description: string) { }
}
