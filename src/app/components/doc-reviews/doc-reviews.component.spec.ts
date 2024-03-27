import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocReviewsComponent } from './doc-reviews.component';

describe('DocReviewsComponent', () => {
  let component: DocReviewsComponent;
  let fixture: ComponentFixture<DocReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
