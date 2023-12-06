import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CheckListComponent } from './components/check-list/check-list.component';
import { ContainerComponent } from './components/container/container.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/form/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgressBarComponent } from './components/header/progress-bar/progress-bar.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< Updated upstream
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CheckListComponent } from './components/check-list/check-list.component';
import { AngularSplitModule } from 'angular-split';

=======
import { TeachersComponent } from './components/teachers/teachers.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    ProgressBarComponent,
    TeachersComponent,
    FormComponent,
    InputComponent,
    AboutUsComponent,
    LoginComponent,
    CheckListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatProgressBarModule,
    CarouselModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    AngularSplitModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
