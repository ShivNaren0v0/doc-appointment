import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdetailsComponent } from './docdetails.component';

describe('DocdetailsComponent', () => {
  let component: DocdetailsComponent;
  let fixture: ComponentFixture<DocdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
