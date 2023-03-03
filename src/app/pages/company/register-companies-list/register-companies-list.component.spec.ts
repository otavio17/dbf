import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCompaniesListComponent } from './register-companies-list.component';

describe('RegisterCompaniesListComponent', () => {
  let component: RegisterCompaniesListComponent;
  let fixture: ComponentFixture<RegisterCompaniesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCompaniesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCompaniesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
