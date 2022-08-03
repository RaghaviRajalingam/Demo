import { Component, OnInit } from '@angular/core';
import {ServicesService } from '../services.service';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {
  details:any;

  constructor(private readonly service:ServicesService) { }

    ngOnInit(): void {
      this.service.getDetails()
      .subscribe(response => {
        this.details = response;
        console.log("API Details",this.details);
        console.log("Array",this.details.Team);
        console.log("Details",this.details.Team[0].GameActivityTag);
      });
    }
}
