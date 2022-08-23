import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormArray, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';
import {  ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { ValidateUrl, NoNegativeNumbers } from '../shared/customValidator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  submitted = false;
  submitTicket = false;
  user: FormGroup | any;
  mySuccessMessage:string ="Submitted Successfully"
  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price', editable: true} //make particular column editable
];

rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
];
defaultColDef = {
  sortable: true,  //sorting
  filter: true     //filter
};
firstName: any;
  lastName: any;
  dynamicForm: FormGroup | any;
  constructor(private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly http: HttpClient) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      tickets: new FormArray([])
  });
    this.user = this.formBuilder.group({
      firstName: ['', Validators.required, Validators.pattern('[a-zA-Z]*')],
      lastName: ['', Validators.required, Validators.pattern('[a-zA-Z]*')],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      age: ['', [Validators.required, NoNegativeNumbers]],
      websiteUrl: ['', [Validators.required, ValidateUrl]],
      profile: ['', [Validators.required,
      RxwebValidators.extension({ extensions: ["jpeg", "gif", "png"] })
      ]
      ],
      acceptTerms: [false, Validators.requiredTrue]
    });
    // Subscribed the first name
    this.user.get("firstName").valueChanges.subscribe((selectedValue: any) => {
        console.log('firstName value changed')
        console.log(selectedValue)                              //latest value of firstName
        console.log(this.user.get("firstName").value)   //latest value of firstName
      })
  }
  
  // convenience getter for easy access to form fields
  get r() { return this.user.controls; }

  onSubmit() {
    this.submitted = true;
    //To get the details from form
    this.firstName = this.user.get('firstName').value;
    console.log("First Name:::",this.firstName);
    this.lastName = this.user.get('lastName').value;
    console.log("First Name:::",this.lastName);
    //To disable to feild after submission
    // setTimeout(() => this.user.disable(), 2000);

    // stop here if form is invalid
    if (this.user.invalid) {
      return;
    }
  }

  // gotoHome() {
  //   if (this.submitted === true && !this.user.invalid) {
  //     setTimeout(() => this.user.disable(), 2000);
  //     this.router.navigate(['/dashboard']);
  //   }
  // }
  content(){
    this.router.navigate(['/content']);
  }
  onReset() {
    this.submitted = false;
    this.user.reset();
  }
  // convenience getters for easy access to form fields
  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }
  get ticketFormGroups() { return this.t.controls as FormGroup[]; }

  onChangeTickets(e:any) {
      const numberOfTickets = e.target.value || 0;
      if (this.t.length < numberOfTickets) {
          for (let i = this.t.length; i < numberOfTickets; i++) {
              this.t.push(this.formBuilder.group({
                  name: ['', Validators.required],
                  email: ['', [Validators.required, Validators.email]]
              }));
          }
      } else {
          for (let i = this.t.length; i >= numberOfTickets; i--) {
              this.t.removeAt(i);
          }
      }
  }  
  submit() {
      this.submitTicket = true;

      // stop here if form is invalid
      if (this.dynamicForm.invalid) {
          return;
      }
  }
}
