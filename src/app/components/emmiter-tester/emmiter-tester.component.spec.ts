import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmiterTesterComponent } from './emmiter-tester.component';

describe('EmmiterTesterComponent', () => {
  let component: EmmiterTesterComponent;
  let fixture: ComponentFixture<EmmiterTesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmmiterTesterComponent]
    });
    fixture = TestBed.createComponent(EmmiterTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
