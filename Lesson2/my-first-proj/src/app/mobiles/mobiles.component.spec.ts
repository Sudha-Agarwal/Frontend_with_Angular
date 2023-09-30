import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesComponent } from './mobiles.component';

describe('MobilesComponent', () => {
  let component: MobilesComponent;
  let fixture: ComponentFixture<MobilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilesComponent]
    });
    fixture = TestBed.createComponent(MobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
