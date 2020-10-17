import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceSuggestionsComponent } from './evidence-suggestions.component';

describe('EvidenceSuggestionsComponent', () => {
  let component: EvidenceSuggestionsComponent;
  let fixture: ComponentFixture<EvidenceSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvidenceSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
