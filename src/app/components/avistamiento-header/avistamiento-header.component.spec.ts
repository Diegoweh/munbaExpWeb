import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvistamientoHeaderComponent } from './avistamiento-header.component';

describe('AvistamientoHeaderComponent', () => {
  let component: AvistamientoHeaderComponent;
  let fixture: ComponentFixture<AvistamientoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvistamientoHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvistamientoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
