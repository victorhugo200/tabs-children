import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';

@NgModule({
  declarations: [SigninComponent],
  exports: [SigninComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SigninModule { }
