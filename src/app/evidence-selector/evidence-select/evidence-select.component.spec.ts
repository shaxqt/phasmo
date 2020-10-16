import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceSelectComponent } from './evidence-select.component';

describe('EvidenceSelectComponent', () => {
  let component: EvidenceSelectComponent;
  let fixture: ComponentFixture<EvidenceSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvidenceSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
