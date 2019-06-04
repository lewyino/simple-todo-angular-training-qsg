import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainTodoComponent} from './components/todo/main-todo.component';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {TaskFormComponent} from './components/task-form/task-form.component';

const routes: Routes = [
    {path: 'stats', loadChildren: './stats/stats.module#StatsModule'},
    {path: 'todo', component: MainTodoComponent},
    {
        path: 'task-form', children: [
            {path: '', component: TaskFormComponent},
            {path: ':id', component: TaskFormComponent},
        ]
    },
    {path: 'add-task', component: AddTaskComponent},
    {path: '**', component: MainTodoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
