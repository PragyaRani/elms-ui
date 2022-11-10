import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcompleteCourseComponent } from './imcomplete-course.component';

describe('ImcompleteCourseComponent', () => {
  let component: ImcompleteCourseComponent;
  let fixture: ComponentFixture<ImcompleteCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcompleteCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImcompleteCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
