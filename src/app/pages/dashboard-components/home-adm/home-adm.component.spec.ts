import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeAdmComponent } from './home-adm.component';

describe('HomeAdmComponent', () => {
  let component: HomeAdmComponent;
  let fixture: ComponentFixture<HomeAdmComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeAdmComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
