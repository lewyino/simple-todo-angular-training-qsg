import {Component, OnInit} from '@angular/core';
import {TaskType} from '../../models/task-type.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskModel} from '../../models/task.model';
import {TaskService} from '../../services/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormInterface} from '../../models/form.interface';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

    public taskTypeEnum = TaskType;
    public form: FormGroup;
    public error = false;
    private originalValue: Partial<FormInterface> = {
        type: TaskType.TODO
    };

    constructor(private formBuilder: FormBuilder,
                private taskService: TaskService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            type: [TaskType.TODO, [Validators.required]]
        });
        const routeSnapshot = this.route.snapshot;
        if (routeSnapshot.params.id) {
            this.loadData(routeSnapshot.params.id);
        }
    }

    onReset() {
        this.form.reset(this.originalValue);
        this.error = false;
    }

    onTitleChange() {
        this.error = false;
    }

    onSubmit() {
        if (!this.form.valid) {
            this.error = true;
            return;
        }
        const task = new TaskModel(this.form.value);
        let fn = this.taskService.addTask;
        if (this.originalValue.id) {
            task.id = this.originalValue.id;
            fn = this.taskService.editTask;
        }
        fn.call(this.taskService, task, this.form.value.type)
            .subscribe((data) => {
                if (data === null) {
                    this.error = true;
                } else {
                    this.router.navigate(['/todo']);
                }
            });
    }

    loadData(taskId: string) {
        this.taskService.getTask(taskId)
            .subscribe((data) => {
                this.originalValue = data || {};
                this.form.patchValue(this.originalValue);
            });
    }

}
