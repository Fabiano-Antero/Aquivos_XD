import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitosDeVidaPage } from './habitos-de-vida.page';

describe('HabitosDeVidaPage', () => {
  let component: HabitosDeVidaPage;
  let fixture: ComponentFixture<HabitosDeVidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitosDeVidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitosDeVidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
