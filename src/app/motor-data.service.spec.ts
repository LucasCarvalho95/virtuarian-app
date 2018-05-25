import { TestBed, inject } from '@angular/core/testing';

import { MotorDataService } from './motor-data.service';

describe('MotorDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotorDataService]
    });
  });

  it('should be created', inject([MotorDataService], (service: MotorDataService) => {
    expect(service).toBeTruthy();
  }));
});
