import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StatsRoutingModule} from './stats-routing.module';
import {ShowComponent} from './show/show.component';

@NgModule({
    declarations: [ShowComponent],
    imports: [
        CommonModule,
        StatsRoutingModule,
    ]
})
export class StatsModule {
}
