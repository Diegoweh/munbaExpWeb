import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploradorHeaderComponent } from './explorador-header.component';

describe('ExploradorHeaderComponent', () => {
  let component: ExploradorHeaderComponent;
  let fixture: ComponentFixture<ExploradorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploradorHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploradorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
