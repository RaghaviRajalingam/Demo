import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  submitted = false;
  user: FormGroup | any;
constructor(private formBuilder: FormBuilder) {
  this.myForm();
 }
  ngOnInit() {
    // this.myForm();
  }
  public myForm(){
    this.user = this.formBuilder.group({
      firstName: ['', Validators.required,Validators.pattern('[a-zA-Z]*')],
      lastName: ['', Validators.required,Validators.pattern('[a-zA-Z]*')],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      country: ['', Validators.required],
      file: ['', Validators.required]
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.user.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.user.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user.value, null, 4));
  }
}
