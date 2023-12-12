import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRoute } from './login.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoute)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
