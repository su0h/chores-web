import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ChoresContainerComponent } from './chores-container/chores-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ChoresContainerComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chores';
  faUndo = faUndo;

  protected revertTaskAssignments(): void {
    // TODO: Implement this functionality (API call to backend to unshift)
    console.log("TODO");
  }
}
