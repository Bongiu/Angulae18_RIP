import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RipassoComponentiComponent } from './ripasso-componenti.component';

describe('RipassoComponentiComponent', () => {
  let component: RipassoComponentiComponent;
  let fixture: ComponentFixture<RipassoComponentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RipassoComponentiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RipassoComponentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
