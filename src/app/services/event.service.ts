import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {TaskModel} from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    public deleteEvent$: Subject<TaskModel> = new Subject();

    constructor() {
    }
}
