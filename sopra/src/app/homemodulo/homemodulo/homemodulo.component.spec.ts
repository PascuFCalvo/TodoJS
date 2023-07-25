import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemoduloComponent } from './homemodulo.component';

describe('HomemoduloComponent', () => {
  let component: HomemoduloComponent;
  let fixture: ComponentFixture<HomemoduloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomemoduloComponent]
    });
    fixture = TestBed.createComponent(HomemoduloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
