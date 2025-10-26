import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-snackbar',
  template: `
    <div class="flex items-center gap-2">
      <mat-icon>{{ data.icon }}</mat-icon>
      <span>{{ data.message }}</span>
    </div>
  `,
  imports: [
    MatIcon
  ],
  styles: [`
    :host {
      color: white;
      display: flex;
      align-items: center;
    }
  `]
})
export class SnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { message: string; icon: string }) {}
}
