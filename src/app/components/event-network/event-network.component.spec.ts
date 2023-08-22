import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNetworkComponent } from './event-network.component';

describe('EventNetworkComponent', () => {
  let component: EventNetworkComponent;
  let fixture: ComponentFixture<EventNetworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventNetworkComponent]
    });
    fixture = TestBed.createComponent(EventNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
