import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRouterComponent } from './post-router.component';

describe('PostRouterComponent', () => {
  let component: PostRouterComponent;
  let fixture: ComponentFixture<PostRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
