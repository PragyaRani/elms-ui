import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginLayoutComponent } from './post-login-layout.component';

describe('PostLoginLayoutComponent', () => {
  let component: PostLoginLayoutComponent;
  let fixture: ComponentFixture<PostLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLoginLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
