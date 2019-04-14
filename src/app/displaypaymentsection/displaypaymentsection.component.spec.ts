import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypaymentsectionComponent } from './displaypaymentsection.component';

describe('DisplaypaymentsectionComponent', () => {
  let component: DisplaypaymentsectionComponent;
  let fixture: ComponentFixture<DisplaypaymentsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypaymentsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypaymentsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
