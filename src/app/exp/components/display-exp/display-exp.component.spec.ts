import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayExpComponent } from './display-exp.component';

describe('DisplayExpComponent', () => {
  let component: DisplayExpComponent;
  let fixture: ComponentFixture<DisplayExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
