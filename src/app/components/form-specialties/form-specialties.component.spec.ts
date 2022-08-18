import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSpecialtiesComponent } from './form-specialties.component';

describe('FormSpecialtiesComponent', () => {
  let component: FormSpecialtiesComponent;
  let fixture: ComponentFixture<FormSpecialtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSpecialtiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
