import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameRespiratorioPage } from './exame-respiratorio.page';

describe('ExameRespiratorioPage', () => {
  let component: ExameRespiratorioPage;
  let fixture: ComponentFixture<ExameRespiratorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExameRespiratorioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameRespiratorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
