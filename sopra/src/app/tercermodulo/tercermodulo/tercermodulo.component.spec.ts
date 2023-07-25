import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercermoduloComponent } from './tercermodulo.component';

describe('TercermoduloComponent', () => {
  let component: TercermoduloComponent;
  let fixture: ComponentFixture<TercermoduloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TercermoduloComponent]
    });
    fixture = TestBed.createComponent(TercermoduloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
