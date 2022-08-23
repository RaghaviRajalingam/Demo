import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @Input() mySuccessMsg: any; 

  value: any;
  constructor() { }

  ngOnInit(): void {
    alert(this.mySuccessMsg);
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    this.value = observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
    console.log("Value",this.value);
  }
  ngOnDestroy() {
    this.value.unsubscribe();
  }
}
