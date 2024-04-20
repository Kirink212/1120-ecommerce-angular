import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCartComponent } from './books-cart.component';

describe('BooksCartComponent', () => {
  let component: BooksCartComponent;
  let fixture: ComponentFixture<BooksCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
