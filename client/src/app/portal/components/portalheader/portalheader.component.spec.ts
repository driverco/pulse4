import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalHeaderComponent } from './portalheader.component';

describe('PortalComponent', () => {
  let component: PortalHeaderComponent;
  let fixture: ComponentFixture<PortalHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalHeaderComponent]
    });
    fixture = TestBed.createComponent(PortalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

