import { TestBed } from '@angular/core/testing';

import { BooksCartApiService } from './books-cart-api.service';

describe('BooksCartApiService', () => {
  let service: BooksCartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksCartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
