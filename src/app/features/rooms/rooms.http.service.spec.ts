import { TestBed } from '@angular/core/testing';

import { RoomsHttpService } from './rooms.http.service';

describe('Rooms.HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomsHttpService = TestBed.get(RoomsHttpService);
    expect(service).toBeTruthy();
  });
});
