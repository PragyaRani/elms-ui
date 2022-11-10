import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { CourseService } from 'src/app/core/service/course.service';
import { ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'app-assign-course',
  templateUrl: './assign-course.component.html',
  styleUrls: ['./assign-course.component.scss']
})
export class AssignCourseComponent implements OnInit {
  message = {
    type: 'INFO',
    message: '',
    show: false,
  };
  courseId: number;
  isEnrolled: boolean;
  courseForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute,
    private courseService: CourseService,public authService:AuthService) { }

  ngOnInit(): void {
    this.createCourseForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params['courseId']) {
        this.courseId = Number(params['courseId']);
        this.isEnrolled = true;
        this.courseService.getCoursebyId(this.courseId).subscribe({
          next: (res: any) => {
            if (!res && !res.success) {
              this.message = {
                show: true,
                message: res.message || 'Something went wrong',
                type: 'ERROR',
              };
              return;
            }
            this.patchForm(res);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    });
  }
  onCancel():any {
    this.router.navigate(['/layout/admin/dashboard'], {
      // queryParams: { tab: 'LOANS' },
    });
  }
  onAssignCourse() : any {
   
    this.courseService.studentEnrollCourse(
      {"studEmail": this.courseForm.value.studentEmail,
      "enrollCourseId": this.courseId}).subscribe({
      next: (res: any) => {
        if (!res && !res.success) {
          this.message = {
            show: true,
            message: res.message || 'Something went wrong',
            type: 'ERROR',
          };
          return;
        }
        this.onCancel();
      },
      error: (err: any) => {
        console.log(err);
        this.message = {
          show: true,
          message: 'Something went wrong',
          type: 'ERROR',
        };
      },
    });
  }
  private createCourseForm(): void {
    this.courseForm = this.fb.group({
      studentEmail:[''],
      courseName: [''],
      author: [''],
      language: [''],
      rating:[''],
      hours:[''],
      category:[''],
      subcategory: [''],
      content: [''],
      topicName:[''],
      updatedDate:[''],
      creationDate: [''],
    });
  }
  private patchForm(course: ICourse): void {
    this.courseForm.patchValue({
      courseName: course.name,
      author: course.author,
      language: course?.language,
      rating:course?.rating,
      hours:course?.hours,
      category: course.categories?.categoryName,
      subcategory: course.categories?.subCategory,
      content: course.contents?.contentName,
      topicName:course.topics?.topicName,
      updatedDate:course?.updatedDate,
      creationDate: course?.createdDate,
    });
  }

}
