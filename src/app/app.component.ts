import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ChoresContainerComponent } from './chores-container/chores-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ChoresContainerComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected faUndo = faUndo;

  constructor(private dialog: MatDialog) { }

  protected revertTaskAssignments(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      message: "Are you sure you want to reverse the task assignments?"
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(userConfirmed => {
      if (userConfirmed) {
        console.log('User clicked Yes');
        // Perform the action when the user clicks 'Yes'
        // TODO: Implement this functionality (API call to backend to unshift)
        console.log("TODO");
      }
    });

    dialogRef.backdropClick().subscribe(() => {
      dialogRef.close(false);
    });
  }
}
