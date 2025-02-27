import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BybrandComponent } from './bybrand.component';

describe('BybrandComponent', () => {
  let component: BybrandComponent;
  let fixture: ComponentFixture<BybrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BybrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BybrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
