import {TaskType} from './task-type.enum';
import {TaskInterface} from './task.interface';

export interface FormInterface extends TaskInterface {
    type: TaskType;
}
