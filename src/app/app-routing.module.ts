import { RegisterFormComponent } from './register-form/register-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { ChartComponent } from './chart/chart.component';
import { ReusableContentComponent } from './reusable-content/reusable-content.component';
import { DetailsTableComponent } from './details-table/details-table.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent },
  { path: 'register', component:RegisterFormComponent},
  { path: 'content', component:ContentComponent},
  { path: 'chart', component:ChartComponent},
  { path: 'ngContent', component:ReusableContentComponent},
  { path: 'apidetails', component:DetailsTableComponent},
  { path: 'ngrxstore', component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
