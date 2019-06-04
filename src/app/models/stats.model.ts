import {StatsInterface} from './stats.interface';

export class StatsModel implements StatsInterface {
    todo: number;
    todoPercent: number;
    inProgress: number;
    inProgressPercent: number;
    done: number;
    donePercent: number;

    constructor(opts?: Partial<StatsInterface>) {
        opts = opts || {};
        this.todo = opts.todo || 0;
        this.inProgress = opts.inProgress || 0;
        this.done = opts.done || 0;
        const sum = this.todo + this.inProgress + this.done;
        this.todoPercent = Math.round(this.todo / sum * 100);
        this.inProgressPercent = Math.round(this.inProgress / sum * 100);
        this.donePercent = Math.round(this.done / sum * 100);
    }
}
