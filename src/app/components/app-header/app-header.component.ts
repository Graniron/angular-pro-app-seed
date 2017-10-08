import { User } from './../../../auth/shared/services/auth/auth.service';
import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-header.component.scss'],
    template: `
        <div class="app-header">
            <div class="wrapper">
                <img src="/img/logo.svg">
                <div *ngIf="user?.authenticated"
                     class="app-header__user-info">
                    <span (click)="logoutUser()"></span>
                </div>
            </div>
        </div>
    `
})

export class AppHeaderComponent implements OnInit {
    @Input()
    user: User;

    @Output()
    logout = new EventEmitter<any>();

    logoutUser() {
        this.logout.emit();
    }

    constructor() { }

    ngOnInit() { }
}