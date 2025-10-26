import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Formation} from '../../../model/Formation';
import {uuid} from '../../../shared/uuid';
import {MatError, MatFormField, MatHint} from '@angular/material/form-field';
import {FormationService} from '../formation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formation-creation',
  imports: [
    MatButton,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatError,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule
  ],
  templateUrl: './formation-creation.component.html',
  styleUrl: './formation-creation.component.css'
})
export class FormationCreationComponent {

  formationService = inject(FormationService);

  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.maxLength(100)]),
    location: new FormControl<string>('', [Validators.required]),
    date: new FormControl<Date>(new Date(), [Validators.required]),
    description: new FormControl<string>(''),
    price: new FormControl<number>(0),
    tags: new FormControl<string>(''),
    distance: new FormControl<number>(0, [Validators.required, Validators.min(1), Validators.max(100)]),
    time: new FormControl(),
    placeMax: new FormControl(0),
  })
  constructor(private snackBar: MatSnackBar) {}

  isTitleTooLong() {
    return this.form.get('title')?.hasError('maxlength');
  }

  addFormation() {
    const formation: Formation = {
      id: uuid(),
      title: this.form.get('title')?.value!,
      location: this.form.get('location')?.value!,
      date: this.form.get('date')?.value!,
      time: this.form.get('time')?.value!,
      price: this.form.get('price')?.value!,
      placeMax: this.form.get('placeMax')?.value!,
      description: this.form.get('description')?.value || '',
      tags: this.form.get('tags')?.value ? this.extractTags() : [],
      distance: this.form.get('distance')?.value!
    }

    this.formationService.addFormation(formation);
    this.form.reset();
    this.snackBar.open('Formation Added avec succès', 'Ok',{
      duration:3000,
    });

  }

  private extractTags() {
    let tagsAsString = this.form.get('tags')?.value!;
    return tagsAsString.split(',').map(t => t.trim());
  }
}
