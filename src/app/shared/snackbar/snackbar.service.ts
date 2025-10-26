import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  open(message: string, icon: string = 'info', duration = 3000) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message, icon },
      duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snackbar-container']
    });
  }
}
