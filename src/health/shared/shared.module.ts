import { MealsService } from './services/meals/meals.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

// third party modules
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        AngularFireDatabaseModule
    ],   
    providers: [MealsService],
    declarations: []   
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                MealsService
            ]
        }
    }
 }
