import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReceivedListComponent } from './transaction-received-list.component';

describe('TransactionReceivedListComponent', () => {
  let component: TransactionReceivedListComponent;
  let fixture: ComponentFixture<TransactionReceivedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionReceivedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionReceivedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
