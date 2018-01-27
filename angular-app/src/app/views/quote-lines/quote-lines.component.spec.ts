import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteLinesComponent } from './quote-lines.component';

describe('QuoteLinesComponent', () => {
  let component: QuoteLinesComponent;
  let fixture: ComponentFixture<QuoteLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
