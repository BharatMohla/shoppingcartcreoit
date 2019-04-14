import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayshippinginfoComponent } from './displayshippinginfo.component';

describe('DisplayshippinginfoComponent', () => {
  let component: DisplayshippinginfoComponent;
  let fixture: ComponentFixture<DisplayshippinginfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayshippinginfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayshippinginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
