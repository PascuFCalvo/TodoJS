import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundomoduloComponent } from './segundomodulo.component';

describe('SegundomoduloComponent', () => {
  let component: SegundomoduloComponent;
  let fixture: ComponentFixture<SegundomoduloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundomoduloComponent]
    });
    fixture = TestBed.createComponent(SegundomoduloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
