import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostLoginFooterComponent } from './post-login-footer.component';



describe('FooterComponent', () => {
  let component: PostLoginFooterComponent;
  let fixture: ComponentFixture<PostLoginFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLoginFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLoginFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
