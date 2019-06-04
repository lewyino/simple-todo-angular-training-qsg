import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {TasksListModel} from '../../models/tasks-list.model';
import {TaskType} from '../../models/task-type.enum';
import {filter, takeWhile} from 'rxjs/operators';
import {StatsModel} from '../../models/stats.model';

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit, OnDestroy {

    public stats: StatsModel;

    private sub = true;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.taskService.tasks
            .pipe(
                takeWhile(() => this.sub),
                filter((data) => data.length > 0),
            )
            .subscribe((data: TasksListModel[]) => {
                const tmpStats = {
                    todo: 0,
                    inProgress: 0,
                    done: 0,
                };
                tmpStats.todo = data.find((item) => item.type === TaskType.TODO).tasks.length;
                tmpStats.inProgress = data.find((item) => item.type === TaskType.IN_PROGRESS).tasks.length;
                tmpStats.done = data.find((item) => item.type === TaskType.DONE).tasks.length;
                this.stats = new StatsModel(tmpStats);
            });
        this.taskService.getData();
    }

    ngOnDestroy(): void {
        this.sub = false;
    }

}
