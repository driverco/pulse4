import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRCodesComponent } from './qrcodes.component';

describe('LoginComponent', () => {
  let component: QRCodesComponent;
  let fixture: ComponentFixture<QRCodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QRCodesComponent]
    });
    fixture = TestBed.createComponent(QRCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
