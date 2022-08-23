import { Component,Input, OnInit,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Output() myOutput = new EventEmitter();  
  outputMessage:string="Need to add the product and price , It will be listed below"  
  constructor() { }

  ngOnInit(): void {
  }
  sendValues(){  
    this.myOutput.emit(this.outputMessage);  
 } 
}
