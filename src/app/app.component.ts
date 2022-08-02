import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
const array = [1, 2, 'three', true];

from(array)
	.subscribe((val: any) => console.log(val));
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
constructor(private readonly router: Router) { }
  ngOnInit() {
  }

  //ng grid Data
  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
];

rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
];
gotoForm() {
  this.router.navigate(['/register']);
}
gotoChart() {
  this.router.navigate(['/chart']);
}
gotocontent() {
  this.router.navigate(['/ngContent']);
}
}

