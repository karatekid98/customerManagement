import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCardViewComponent } from './customer-card-view.component';

describe('CustomerCardViewComponent', () => {
  let component: CustomerCardViewComponent;
  let fixture: ComponentFixture<CustomerCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
