import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvistamientoComponent } from './avistamiento.component';

describe('AvistamientoComponent', () => {
  let component: AvistamientoComponent;
  let fixture: ComponentFixture<AvistamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvistamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvistamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
