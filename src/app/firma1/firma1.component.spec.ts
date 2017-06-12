import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Firma1Component } from './firma1.component';

describe('Firma1Component', () => {
  let component: Firma1Component;
  let fixture: ComponentFixture<Firma1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firma1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Firma1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
