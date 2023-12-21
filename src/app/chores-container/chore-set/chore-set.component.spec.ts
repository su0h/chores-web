import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreSetComponent } from './chore-set.component';

describe('ChoreSetComponent', () => {
  let component: ChoreSetComponent;
  let fixture: ComponentFixture<ChoreSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoreSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoreSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
