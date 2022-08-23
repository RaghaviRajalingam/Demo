import { Component, OnInit } from '@angular/core';
import {ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {
  details:any;
  errorMessage:any;
  errorBlock: boolean = false;
  constructor(private readonly service:ApiService) { }

    ngOnInit(): void {
      // this.service.getData().subscribe((data)=>{
      //  console.log("Data from server",data);
      // }, error =>{
      //   this.errorBlock = true;
      //   this.errorMessage = error.message;
      // }
      // );
      this.service.getDetails().subscribe((response)=>{
        console.log("Table Data from Server", response);
      }, error=>{
        this.errorBlock = true;
        this.errorMessage = error.message;
      });
    }
}
