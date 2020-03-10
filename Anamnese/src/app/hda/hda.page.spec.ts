import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdaPage } from './hda.page';

describe('HdaPage', () => {
  let component: HdaPage;
  let fixture: ComponentFixture<HdaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
