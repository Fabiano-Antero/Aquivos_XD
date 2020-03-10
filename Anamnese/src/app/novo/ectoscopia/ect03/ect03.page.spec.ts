import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ect03Page } from './ect03.page';

describe('Ect03Page', () => {
  let component: Ect03Page;
  let fixture: ComponentFixture<Ect03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ect03Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ect03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
