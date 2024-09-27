import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatoriRxjsComponent } from './operatori-rxjs.component';

describe('OperatoriRxjsComponent', () => {
  let component: OperatoriRxjsComponent;
  let fixture: ComponentFixture<OperatoriRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatoriRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatoriRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
