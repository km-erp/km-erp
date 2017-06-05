import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgComponent } from './upg.component';

describe('UpgComponent', () => {
  let component: UpgComponent;
  let fixture: ComponentFixture<UpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
