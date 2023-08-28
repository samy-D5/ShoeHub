import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
const routes:Routes=[{
  path:'Products',
  component:ProductsComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    ReviewComponent,
    LoginComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
