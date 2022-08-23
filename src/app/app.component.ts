import { Component, OnInit, ViewChild,AfterViewInit, ElementRef } from '@angular/core';
import { AsyncSubject,BehaviorSubject,Observable, from } from 'rxjs';
import { Router } from '@angular/router';

//BehaviorSubject from rxjs
const subject = new BehaviorSubject(123);
subject.subscribe(console.log);
subject.subscribe(console.log);
subject.next(456);
subject.subscribe(console.log);
subject.next(789);
// output: 123, 123, 456, 456, 456, 789, 789, 789

//AsyncSubject from rxjs
const sub = new AsyncSubject();
sub.subscribe(console.log);
sub.next(123); //nothing logged
sub.subscribe(console.log);
sub.next(456); //nothing logged
sub.complete(); //456, 456 logged by both subscribers

const array = [1, 2, 'three', true];

from(array)
  .subscribe((val: any) => console.log(val));
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  value: any;
  constructor(private readonly router: Router) { }
  ngOnInit() {
    //map using rxjs
    // const observable = of(1, 2, 3, 4, 5, 6);
    // const subscription = observable.pipe(
    //   map(val => val * val)
    // ).subscribe(val => console.log(val));

    //Filter the value using rxjs
    // const observable = of(1, 2, 3, 4, 5, 6);
    // const subscription = observable.pipe(
    //   filter(val => val % 2 === 0)
    // ).subscribe(val => console.log(val));
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

