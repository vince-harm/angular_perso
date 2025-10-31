import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatHint, MatLabel} from '@angular/material/form-field';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-user-profile',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatHint,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatSelect,
    MatOption
  ],
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: [null, Validators.required],
      address: [''],
      role: ['utilisateur']
    });
  }

  saveProfile() {
    if (this.form.valid) {
      console.log('Profil enregistré :', this.form.value);
    }
  }
}
