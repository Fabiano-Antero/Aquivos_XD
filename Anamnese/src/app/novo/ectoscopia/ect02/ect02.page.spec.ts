import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ect02Page } from './ect02.page';

describe('Ect02Page', () => {
  let component: Ect02Page;
  let fixture: ComponentFixture<Ect02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ect02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ect02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
