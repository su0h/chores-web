export class TaskAssignment {
    private _task: String;
    private _assignee: String;

    constructor(task: String, assignee: String) {
        this._task = task;
        this._assignee = assignee;
    }

    public get task(): String {
        return this._task;
    }

    public get assignee(): String {
        return this._assignee;
    }
}