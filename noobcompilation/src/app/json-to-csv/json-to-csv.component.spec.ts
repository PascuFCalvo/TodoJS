import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONToCSVComponent } from './json-to-csv.component';

describe('JSONToCSVComponent', () => {
  let component: JSONToCSVComponent;
  let fixture: ComponentFixture<JSONToCSVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JSONToCSVComponent]
    });
    fixture = TestBed.createComponent(JSONToCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
