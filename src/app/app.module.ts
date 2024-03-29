import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RegisterFormComponent } from './register-form/register-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ContentComponent } from './content/content.component';
import { ChartComponent } from './chart/chart.component';
import { ReusableContentComponent } from './reusable-content/reusable-content.component';
import { DetailsTableComponent } from './details-table/details-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ChartsModule } from 'ng2-charts';

import { ProductsComponent } from './products/products.component';
import { addProductReducer } from './reducers/product.reducer';
import { StoreModule } from '@ngrx/store';
import { StudentComponent } from './student/student.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterFormComponent,
    ContentComponent,
    ChartComponent,
    ReusableContentComponent,
    DetailsTableComponent,
    ProductsComponent,
    StudentComponent,
 
    ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({product: addProductReducer}),
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RxReactiveFormsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
