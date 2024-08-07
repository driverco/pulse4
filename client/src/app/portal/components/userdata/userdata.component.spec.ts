import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataComponent } from './userdata.component';

describe('PortalComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDataComponent]
    });
    fixture = TestBed.createComponent(UserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
