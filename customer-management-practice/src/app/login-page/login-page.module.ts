import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LocalStorageService, AuthGuardService]
})
export class LoginPageModule { }
