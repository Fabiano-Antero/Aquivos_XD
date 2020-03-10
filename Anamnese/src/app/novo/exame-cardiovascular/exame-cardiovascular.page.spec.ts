import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameCardiovascularPage } from './exame-cardiovascular.page';

describe('ExameCardiovascularPage', () => {
  let component: ExameCardiovascularPage;
  let fixture: ComponentFixture<ExameCardiovascularPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExameCardiovascularPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameCardiovascularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
