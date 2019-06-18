import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForLoadPage } from './search-for-load.page';

describe('SearchForLoadPage', () => {
  let component: SearchForLoadPage;
  let fixture: ComponentFixture<SearchForLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForLoadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
