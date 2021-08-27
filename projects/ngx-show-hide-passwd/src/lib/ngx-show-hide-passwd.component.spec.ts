import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxShowHidePasswdComponent } from './ngx-show-hide-passwd.component';

describe('NgxShowHidePasswordComponent', () => {
  let component: NgxShowHidePasswdComponent;
  let fixture: ComponentFixture<NgxShowHidePasswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxShowHidePasswdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxShowHidePasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
