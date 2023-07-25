import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductillosComponent } from './productillos.component';

describe('ProductillosComponent', () => {
  let component: ProductillosComponent;
  let fixture: ComponentFixture<ProductillosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductillosComponent]
    });
    fixture = TestBed.createComponent(ProductillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
