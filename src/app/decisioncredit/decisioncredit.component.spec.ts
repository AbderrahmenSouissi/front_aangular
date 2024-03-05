import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisioncreditComponent } from './decisioncredit.component';

describe('DecisioncreditComponent', () => {
  let component: DecisioncreditComponent;
  let fixture: ComponentFixture<DecisioncreditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecisioncreditComponent]
    });
    fixture = TestBed.createComponent(DecisioncreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
