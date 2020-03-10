import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdaModaPage } from './hda-moda.page';

describe('HdaModaPage', () => {
  let component: HdaModaPage;
  let fixture: ComponentFixture<HdaModaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdaModaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdaModaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
