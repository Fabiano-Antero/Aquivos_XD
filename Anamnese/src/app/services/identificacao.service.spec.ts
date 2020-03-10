import { TestBed } from '@angular/core/testing';

import { IdentificacaoService } from './identificacao.service';

describe('IdentificacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdentificacaoService = TestBed.get(IdentificacaoService);
    expect(service).toBeTruthy();
  });
});
