import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanaccountComponent } from './loanaccount.component';

describe('LoanaccountComponent', () => {
  let component: LoanaccountComponent;
  let fixture: ComponentFixture<LoanaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
