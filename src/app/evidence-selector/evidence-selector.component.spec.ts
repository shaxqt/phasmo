import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EvidenceSelectorComponent} from './evidence-selector.component';

describe('EvidenceSelectorComponent', () => {
  let component: EvidenceSelectorComponent;
  let fixture: ComponentFixture<EvidenceSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EvidenceSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
