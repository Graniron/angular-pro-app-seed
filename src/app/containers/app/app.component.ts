import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService, User } from './../../../auth/shared/services/auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from 'store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <app-header [user]="user$ | async" (logout)="onLogout()"></app-header>
      <app-nav *ngIf="(user$ | async)?.authenticated"></app-nav>
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async onLogout() {
    console.log('logout...');
    await this.authService.logoutUser();
    // redirect to login
    this.router.navigate(['auth/login']);
  }
}
