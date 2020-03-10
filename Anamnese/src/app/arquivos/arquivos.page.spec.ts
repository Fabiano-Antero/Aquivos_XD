import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivosPage } from './arquivos.page';

describe('ArquivosPage', () => {
  let component: ArquivosPage;
  let fixture: ComponentFixture<ArquivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
