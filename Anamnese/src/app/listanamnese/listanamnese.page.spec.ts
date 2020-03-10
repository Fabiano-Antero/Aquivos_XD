import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanamnesePage } from './listanamnese.page';

describe('ListanamnesePage', () => {
  let component: ListanamnesePage;
  let fixture: ComponentFixture<ListanamnesePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListanamnesePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListanamnesePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
