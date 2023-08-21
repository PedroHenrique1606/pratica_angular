import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentlsComponent } from './first-componentls.component';

describe('FirstComponentlsComponent', () => {
  let component: FirstComponentlsComponent;
  let fixture: ComponentFixture<FirstComponentlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponentlsComponent]
    });
    fixture = TestBed.createComponent(FirstComponentlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
