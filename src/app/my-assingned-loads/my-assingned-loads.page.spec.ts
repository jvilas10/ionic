import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssingnedLoadsPage } from './my-assingned-loads.page';

describe('MyAssingnedLoadsPage', () => {
  let component: MyAssingnedLoadsPage;
  let fixture: ComponentFixture<MyAssingnedLoadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAssingnedLoadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAssingnedLoadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
