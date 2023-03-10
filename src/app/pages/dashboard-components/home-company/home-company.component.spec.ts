import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeCompanyComponent } from './home-company.component';

describe('HomeCompanyComponent', () => {
  let component: HomeCompanyComponent;
  let fixture: ComponentFixture<HomeCompanyComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeCompanyComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
