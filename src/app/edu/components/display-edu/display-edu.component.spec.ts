import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEduComponent } from './display-edu.component';

describe('DisplayEduComponent', () => {
  let component: DisplayEduComponent;
  let fixture: ComponentFixture<DisplayEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
