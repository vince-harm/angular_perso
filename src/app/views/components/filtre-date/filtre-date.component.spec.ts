import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreDateComponent } from './filtre-date.component';

describe('FiltreDateComponent', () => {
  let component: FiltreDateComponent;
  let fixture: ComponentFixture<FiltreDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltreDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltreDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
