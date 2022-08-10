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
gotoForm() {
  this.router.navigate(['/register']);
}
gotoApiDetails() {
  this.router.navigate(['/apidetails']);
}
gotoChart() {
  this.router.navigate(['/chart']);
}
gotocontent() {
  this.router.navigate(['/ngContent']);
}
gotoNgrxStore() {
  this.router.navigate(['/ngrxstore']);
}
}

