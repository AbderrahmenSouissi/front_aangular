import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataoctroisComponent } from './dataoctrois.component';

describe('DataoctroisComponent', () => {
  let component: DataoctroisComponent;
  let fixture: ComponentFixture<DataoctroisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataoctroisComponent]
    });
    fixture = TestBed.createComponent(DataoctroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
