import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNoneComponent } from './child-none.component';

describe('ChildNoneComponent', () => {
  let component: ChildNoneComponent;
  let fixture: ComponentFixture<ChildNoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
