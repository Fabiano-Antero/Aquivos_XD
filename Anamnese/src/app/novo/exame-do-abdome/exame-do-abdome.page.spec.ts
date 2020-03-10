import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameDoAbdomePage } from './exame-do-abdome.page';

describe('ExameDoAbdomePage', () => {
  let component: ExameDoAbdomePage;
  let fixture: ComponentFixture<ExameDoAbdomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExameDoAbdomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameDoAbdomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
