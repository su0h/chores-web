import { Component } from '@angular/core';
import { ChoreSetComponent } from './chore-set/chore-set.component';

@Component({
  selector: 'app-chores-container',
  standalone: true,
  imports: [ChoreSetComponent],
  templateUrl: './chores-container.component.html',
  styleUrl: './chores-container.component.css'
})
export class ChoresContainerComponent {

}
