import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocwidgetComponent } from './docwidget.component';

describe('DocwidgetComponent', () => {
  let component: DocwidgetComponent;
  let fixture: ComponentFixture<DocwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocwidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
