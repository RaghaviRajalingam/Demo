import { RegisterFormComponent } from './register-form/register-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent },
  { path: '', component:RegisterFormComponent},
  { path: 'content', component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
