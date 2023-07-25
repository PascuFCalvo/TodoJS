import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimermoduloComponent } from './primermodulo.component';

describe('PrimermoduloComponent', () => {
  let component: PrimermoduloComponent;
  let fixture: ComponentFixture<PrimermoduloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimermoduloComponent]
    });
    fixture = TestBed.createComponent(PrimermoduloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
