import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoresContainerComponent } from './chores-container.component';

describe('ChoresContainerComponent', () => {
  let component: ChoresContainerComponent;
  let fixture: ComponentFixture<ChoresContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoresContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoresContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
