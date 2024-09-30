import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioPostComponent } from './dettaglio-post.component';

describe('DettaglioPostComponent', () => {
  let component: DettaglioPostComponent;
  let fixture: ComponentFixture<DettaglioPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
