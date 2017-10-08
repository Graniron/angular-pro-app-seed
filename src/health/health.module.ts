import { SharedModule } from './../auth/shared/shared.module';
import { AuthGuard } from './../auth/shared/guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



export const ROUTES: Routes = [
    {path: 'meals', canActivate: [AuthGuard], loadChildren: './meals/meals.module#MealsModule'},
    {path: 'schedule', canActivate: [AuthGuard], loadChildren: './schedule/schedule.module#ScheduleModule'},
    {path: 'workouts', canActivate: [AuthGuard], loadChildren: './workouts/workouts.module#WorkoutsModule'},
]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        SharedModule.forRoot()
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class HealthModule { }
