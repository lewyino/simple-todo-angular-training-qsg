import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TaskComponent} from './components/task/task.component';
import {TasksListComponent} from './components/tasks-list/tasks-list.component';
import {MainTodoComponent} from './components/todo/main-todo.component';
import {HttpClientModule} from '@angular/common/http';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskFormComponent} from './components/task-form/task-form.component';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {DefaultValuePipe} from './pipes/default-value.pipe';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [
        AppComponent,
        TaskComponent,
        TasksListComponent,
        MainTodoComponent,
        AddTaskComponent,
        TaskFormComponent,
        DefaultValuePipe,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialComponentsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
