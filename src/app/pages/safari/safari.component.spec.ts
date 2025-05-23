import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariComponent } from './safari.component';

describe('SafariComponent', () => {
  let component: SafariComponent;
  let fixture: ComponentFixture<SafariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
