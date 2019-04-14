import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayheaderComponent } from './displayheader.component';

describe('DisplayheaderComponent', () => {
  let component: DisplayheaderComponent;
  let fixture: ComponentFixture<DisplayheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
