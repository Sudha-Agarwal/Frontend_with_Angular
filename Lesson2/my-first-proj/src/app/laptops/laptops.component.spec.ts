import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsComponent } from './laptops.component';

describe('LaptopsComponent', () => {
  let component: LaptopsComponent;
  let fixture: ComponentFixture<LaptopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaptopsComponent]
    });
    fixture = TestBed.createComponent(LaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
