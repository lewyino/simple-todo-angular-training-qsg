import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowComponent} from './show/show.component';

const routes: Routes = [
    {path: 'show', component: ShowComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatsRoutingModule {
}
