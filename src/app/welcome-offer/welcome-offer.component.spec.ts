import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeOfferComponent } from './welcome-offer.component';

describe('WelcomeOfferComponent', () => {
  let component: WelcomeOfferComponent;
  let fixture: ComponentFixture<WelcomeOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeOfferComponent]
    });
    fixture = TestBed.createComponent(WelcomeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
