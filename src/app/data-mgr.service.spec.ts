import { TestBed, inject } from '@angular/core/testing';

import { DataMgrService } from './data-mgr.service';

describe('DataMgrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataMgrService]
    });
  });

  it('should ...', inject([DataMgrService], (service: DataMgrService) => {
    expect(service).toBeTruthy();
  }));
});
