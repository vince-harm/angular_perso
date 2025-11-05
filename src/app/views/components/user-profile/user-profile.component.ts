import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatDatepickerModule } from '@angular/material/datepicker';
import { MatOption, MatSelect } from '@angular/material/select';
import {MatInput, MatSuffix} from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-profile',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatHint,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerModule,
    MatDatepickerInput,
    MatSelect,
    MatOption,
    MatInput,
    MatButton,
    MatIconModule,
    MatSuffix
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  snackBar = inject(MatSnackBar);

  form = new FormGroup({
    lastName: new FormControl<string>('', [Validators.required]),
    firstName: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    birthDate: new FormControl<Date | null>(null, [Validators.required]),
    address: new FormControl<string>(''),
    role: new FormControl<string>('utilisateur')
  });

  constructor() {}

  isEmailInvalid() {
    const emailControl = this.form.get('email');
    return emailControl?.hasError('required') || emailControl?.hasError('email');
  }

  saveProfile() {
    if (this.form.valid) {
      const userProfile = {
        lastName: this.form.get('lastName')?.value!,
        firstName: this.form.get('firstName')?.value!,
        email: this.form.get('email')?.value!,
        birthDate: this.form.get('birthDate')?.value!,
        address: this.form.get('address')?.value || '',
        role: this.form.get('role')?.value!
      };
      this.form.reset({
        role: 'utilisateur'
      });
      this.snackBar.open('Profil enregistré avec succès', 'Ok', {
        duration: 3000,
      });
    }
  }

}
