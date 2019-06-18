import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedAppsPage } from './suggested-apps.page';

describe('SuggestedAppsPage', () => {
  let component: SuggestedAppsPage;
  let fixture: ComponentFixture<SuggestedAppsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedAppsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedAppsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
