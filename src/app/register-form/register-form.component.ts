import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  submitted = false;
  user: FormGroup | any;
  constructor(private readonly formBuilder: FormBuilder,
    private readonly router: Router) { }
  ngOnInit() {
    this.user = this.formBuilder.group({
      firstName: ['', Validators.required, Validators.pattern('[a-zA-Z]*')],
      lastName: ['', Validators.required, Validators.pattern('[a-zA-Z]*')],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      profile: ['', [Validators.required,
      RxwebValidators.extension({ extensions: ["jpeg", "gif", "png"] })
      ]
      ],
      acceptTerms: [false, Validators.requiredTrue]
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
  }

  gotoHome() {
    if (this.submitted === true && !this.user.invalid) {
      this.router.navigate(['/dashboard']);
    }
  }
  content(){
    this.router.navigate(['/content']);
  }
  onReset() {
    this.submitted = false;
    this.user.reset();
  }
}
