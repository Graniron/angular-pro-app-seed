import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule
    ],    
    declarations: [
        AuthFormComponent
    ],
    exports: [
        AuthFormComponent
    ]   
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AuthService, AuthGuard
            ]
        }
    }
 }
