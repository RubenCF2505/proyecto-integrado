import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CheckListComponent } from './components/check-list/check-list.component';
import { ContainerComponent } from './components/container/container.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'teachers', component: TeachersComponent },
  { path: 'matriculate', component: FormComponent },
  { path: 'matriculate/:id', component: FormComponent },
  { path: "aboutUs",component:AboutUsComponent },
  { path: "login",component:LoginComponent },
  { path: "checkList",component:CheckListComponent ,canActivate:[AuthServiceService]},
  { path:"NotFound",component:PageNotFoundComponent},
  { path:"**",redirectTo:'NotFound'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
