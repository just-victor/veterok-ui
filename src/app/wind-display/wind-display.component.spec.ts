import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDisplayComponent } from './wind-display.component';

describe('WindDisplayComponent', () => {
  let component: WindDisplayComponent;
  let fixture: ComponentFixture<WindDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
