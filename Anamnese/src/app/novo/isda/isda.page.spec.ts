import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsdaPage } from './isda.page';

describe('IsdaPage', () => {
  let component: IsdaPage;
  let fixture: ComponentFixture<IsdaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsdaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
