import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsComponent } from './empdetails.component';

describe('EmpdetailsComponent', () => {
  let component: EmpDetailsComponent;
  let fixture: ComponentFixture<EmpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
