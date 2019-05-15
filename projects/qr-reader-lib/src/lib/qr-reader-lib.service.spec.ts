import { TestBed } from '@angular/core/testing';

import { QrReaderLibService } from './qr-reader-lib.service';

describe('QrReaderLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QrReaderLibService = TestBed.get(QrReaderLibService);
    expect(service).toBeTruthy();
  });
});
