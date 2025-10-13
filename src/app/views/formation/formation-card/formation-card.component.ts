import {Component, computed, inject, input, model} from '@angular/core';
import {DatePipe, NgClass} from "@angular/common";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {Formation} from '../../../model/Formation';
import {MatButton} from '@angular/material/button';
import {FormationService} from '../formation.service';
import {RouterLink} from '@angular/router';
import {FormationTagsComponent} from '../formation-tags/formation-tags.component';

@Component({
  selector: 'app-formation-card',
  imports: [
    DatePipe,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardTitle,
    MatButton,
    MatCardSubtitle,
    RouterLink,
    FormationTagsComponent,
    NgClass
  ],
  templateUrl: './formation-card.component.html',
  styleUrl: './formation-card.component.css'
})
export class FormationCardComponent {

  formationService = inject(FormationService);
  formation = model.required<Formation>();
  specialClass = input<string>('');

  isPast = computed(() => {
    return Date.now() > this.formation().date.getTime();
  });

  postpone() {
    this.formation.update(f => {
      let newDate = new Date(f.date);
      newDate.setDate(newDate.getDate() + 7);
      f.date = newDate;

      return { ...f, date: newDate };
    });
  }

  deleteFormation() {
    this.formationService.removeFormation(this.formation());
  }
}
