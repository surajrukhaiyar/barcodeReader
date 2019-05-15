import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrReaderLibComponent } from './qr-reader-lib.component';

describe('QrReaderLibComponent', () => {
  let component: QrReaderLibComponent;
  let fixture: ComponentFixture<QrReaderLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrReaderLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrReaderLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
