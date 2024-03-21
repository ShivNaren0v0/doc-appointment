import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentwidgetComponent } from './appointmentwidget.component';

describe('AppointmentwidgetComponent', () => {
  let component: AppointmentwidgetComponent;
  let fixture: ComponentFixture<AppointmentwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentwidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
