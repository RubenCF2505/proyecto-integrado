import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { FormComponent } from './components/form/form.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'teachers', component: TeachersComponent },
  { path: 'matriculate', component: FormComponent },
  { path: 'matriculate/:id', component: FormComponent },
  { path: "aboutUs",component:AboutUsComponent },
  { path: "login",component:LoginComponent   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
