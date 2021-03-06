import { WorkoutsComponent } from './containers/workouts/workouts.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
    {path: '', component: WorkoutsComponent}
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [WorkoutsComponent]
})
export class WorkoutsModule { }
