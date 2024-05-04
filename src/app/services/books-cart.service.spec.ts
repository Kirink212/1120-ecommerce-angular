import { TestBed } from '@angular/core/testing';

import { BooksCartService } from './books-cart.service';

describe('BooksCartService', () => {
  let service: BooksCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
