import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxShowHidePasswordComponent } from './ngx-show-hide-password.component';

describe('NgxShowHidePasswordComponent', () => {
  let component: NgxShowHidePasswordComponent;
  let fixture: ComponentFixture<NgxShowHidePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxShowHidePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxShowHidePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
