import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiglioOutputComponent } from './figlio-output.component';

describe('FiglioOutputComponent', () => {
  let component: FiglioOutputComponent;
  let fixture: ComponentFixture<FiglioOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiglioOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiglioOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
