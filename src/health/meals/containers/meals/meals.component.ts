import { MealsService } from './../../../shared/services/meals/meals.service';
import { Store } from './../../../../store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'meals',
    styleUrls: ['meals.component.scss'],
    template: `
       <div>{{meals$ | async | json}}</div>
    `
})

export class MealsComponent implements OnInit, OnDestroy {
    meals$: Observable<any[]>;
    subscription: Subscription;

    constructor(private mealsService: MealsService, private store: Store) { }

    ngOnInit() { 
        this.meals$ = this.store.select('meals')
        this.subscription = this.mealsService.meals$.subscribe();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}