import { TestBed } from '@angular/core/testing';

import { NgxTypedFormBuilderService } from './ngx-typed-form-builder.service';

describe('NgxTypedFormBuilderService', () => {
  let service: NgxTypedFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTypedFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
