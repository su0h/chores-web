import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date/date-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected dateToday: String | null;
  protected isEvening: boolean;
  
  constructor(private dateService: DateService) { 
    this.dateToday = this.dateService.getDateStringToday();
    this.isEvening = this.dateService.isEvening();
  }
}
