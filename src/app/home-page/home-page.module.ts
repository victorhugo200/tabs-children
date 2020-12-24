import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { HomePageComponent } from './home-page.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [HomePageComponent, SignupComponent, SigninComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    RouterModule
  ]
})
export class HomePageModule { }
