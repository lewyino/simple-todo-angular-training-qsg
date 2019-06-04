import * as uuid from 'uuid/v4';
import {TaskInterface} from './task.interface';
import {FormInterface} from './form.interface';
import {TaskType} from './task-type.enum';

export class TaskModel implements TaskInterface, FormInterface {
    id: string;
    title: string;
    type: TaskType;

    constructor(opts?: Partial<TaskInterface & FormInterface>) {
        opts = opts || {};
        this.id = opts.id || uuid();
        this.title = opts.title;
        this.type = opts.type;
    }

}
