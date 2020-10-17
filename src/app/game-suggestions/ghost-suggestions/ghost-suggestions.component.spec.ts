import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostSuggestionsComponent } from './ghost-suggestions.component';

describe('GhostSuggestionsComponent', () => {
  let component: GhostSuggestionsComponent;
  let fixture: ComponentFixture<GhostSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
