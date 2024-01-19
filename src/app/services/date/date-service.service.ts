import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private datePipe: DatePipe) { }

  public getDateStringToday(): String | null {
    return this.datePipe.transform(new Date(), "MMMM d, y (EEEE)");
  }
}
