import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EctoscopiaPage } from './ectoscopia.page';

describe('EctoscopiaPage', () => {
  let component: EctoscopiaPage;
  let fixture: ComponentFixture<EctoscopiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EctoscopiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EctoscopiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
