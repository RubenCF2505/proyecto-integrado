import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabMenuModule } from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ToastModule } from 'primeng/toast';
import { ContainerComponent } from './components/container/container.component';
import { ProgressBarComponent } from './components/header/progress-bar/progress-bar.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/form/input/input.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ContainerComponent, ProgressBarComponent, TeachersComponent, FormComponent, InputComponent, AboutUsComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, TabMenuModule, ProgressBarModule, ToastModule, MatSidenavModule, MatProgressBarModule, CarouselModule, ReactiveFormsModule, MatCheckboxModule, MatInputModule, BrowserAnimationsModule, MatSelectModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

