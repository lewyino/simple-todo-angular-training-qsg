import {Component, OnInit} from '@angular/core';
import {TaskType} from '../../models/task-type.enum';
import {NgForm} from '@angular/forms';
import {TaskService} from '../../services/task.service';
import {TaskModel} from '../../models/task.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {

    public taskTypeEnum = TaskType;
    public error = false;

    constructor(private taskService: TaskService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            this.error = true;
            return;
        }
        const task = new TaskModel(form.value);
        this.taskService.addTask(task, form.value.type)
            .subscribe((data) => {
                if (data === null) {
                    this.error = true;
                } else {
                    this.router.navigate(['/todo']);
                }
            });
    }

}
