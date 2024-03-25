import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAppointmentWidgetComponent } from './doc-appointment-widget.component';

describe('DocAppointmentWidgetComponent', () => {
  let component: DocAppointmentWidgetComponent;
  let fixture: ComponentFixture<DocAppointmentWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocAppointmentWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocAppointmentWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
