import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared module
import { SharedModule } from './shared/shared.module';

export const ROUTES : Routes = [
    {
        path: 'auth',
        children: [
            {path: '', pathMatch: 'full', redirectTo: 'login'},
            {path: 'login', loadChildren: './login/login.module#LoginModule'},
            {path: 'register', loadChildren: './register/register.module#RegisterModule'}            
        ]
    }
]

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyB-F8j3xqruev9OpE4J-5f64ZHRwpcPSYc",
    authDomain: "graniron-fitness-app.firebaseapp.com",
    databaseURL: "https://graniron-fitness-app.firebaseio.com",
    projectId: "graniron-fitness-app",
    storageBucket: "graniron-fitness-app.appspot.com",
    messagingSenderId: "718161609417"
  };


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule { }
