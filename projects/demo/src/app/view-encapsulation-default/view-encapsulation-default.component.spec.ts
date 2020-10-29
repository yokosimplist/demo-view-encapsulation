import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationDefaultComponent } from './view-encapsulation-default.component';

describe('ViewEncapsulationDefaultComponent', () => {
  let component: ViewEncapsulationDefaultComponent;
  let fixture: ComponentFixture<ViewEncapsulationDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
