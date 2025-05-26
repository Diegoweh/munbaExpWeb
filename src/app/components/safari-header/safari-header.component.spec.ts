import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariHeaderComponent } from './safari-header.component';

describe('SafariHeaderComponent', () => {
  let component: SafariHeaderComponent;
  let fixture: ComponentFixture<SafariHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafariHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafariHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
