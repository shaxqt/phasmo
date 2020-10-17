import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostSuggestionComponent } from './ghost-suggestion.component';

describe('GhostSuggestionComponent', () => {
  let component: GhostSuggestionComponent;
  let fixture: ComponentFixture<GhostSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
