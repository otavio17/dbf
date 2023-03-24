import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesPurchaseUserComponent } from './sales-purchase-user.component';

describe('SalesPurchaseComponent', () => {
  let component: SalesPurchaseUserComponent;
  let fixture: ComponentFixture<SalesPurchaseUserComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SalesPurchaseUserComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPurchaseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
