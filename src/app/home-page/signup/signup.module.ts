import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  exports: [SignupComponent],
  imports: [
    MatTabsModule,
    CommonModule
  ]
})
export class SignupModule { }
