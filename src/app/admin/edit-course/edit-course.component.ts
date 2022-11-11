import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/core/service/course.service';
import { LoaderService } from 'src/app/core/service/loader.service';
import { ICourse } from 'src/app/models/course.model';
const CATEGORY: any[] = [
  { value: 'Development', label: 'Development' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Cloud Coputing', label: 'Cloud Coputing' },
  { value: 'Design', label: 'Design' },
  { value: 'IT', label: 'IT' },
  { value: 'Data Science', label: 'Data Science' }
];
const SUBCATEGORY : any[] = [
  {value: 'Cloud Certification', label: 'Cloud Certification'},
  {value: 'Mobile Development', label: 'Mobile Development'},
  {value: 'Digital Marketing', label: 'Digital Marketing'},
  {value: 'Web Design', label: 'Web Design'},
  { value: 'Software', label: 'Software' },
  { value: 'Big Data', label: 'Big Data' }
]
const CONTENTS: any[] = [
  { value: 'Video', label: 'Video' },
  { value: 'Book', label: 'Book' },
  { value: 'External Url', label: 'External Url' }
];
const TOPICS: any[] = [
  { value: 'Kuburnets', label: 'Kuburnets' },
  { value: 'AWS Certification', label: 'AWS Certification' },
  { value: 'CSS', label: 'CSS' },
  { value: 'HTML', label: 'HTML' },
  { value: 'Javascript', label: 'Javascript' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Java', label: 'Java' },
  { value: 'C#', label: 'C#' }
  
];
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  courseId: any;
  onEditMode: boolean;
  courseForm: FormGroup;
  categories = CATEGORY;
  contents = CONTENTS;
  topics = TOPICS;
  subcategories = SUBCATEGORY;
  message = {
    type: 'INFO',
    message: '',
    show: false,
  };
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute,
    private courseService: CourseService, private loader:LoaderService) { }

  ngOnInit(): void {
    this.loader.show();
    this.activatedRoute.params.subscribe((params) => {
      if (params['courseId']) {
        this.courseId = params['courseId'];
        this.onEditMode = true;
        this.courseService.getCoursebyId(this.courseId).subscribe({
          next: (res: any) => {
            this.loader.hide();
            if (!res && !res.success) {
              this.message = {
                show: true,
                message: res.message || 'Something went wrong',
                type: 'ERROR',
              };
              return;
            }
            // res = res.data.userLoans;
            console.log(res);
            this.patchForm(res);
          },
          error: (err: any) => {
            this.loader.hide();
            console.log(err);
          },
        });
      }
    });
    this.createCourseForm();
    this.courseForm?.valueChanges.subscribe({
      next: (data: any) => {
        console.log(data);
      },
    });
    this.loader.hide();
  }
  private createCourseForm(): void {
    this.courseForm = this.fb.group({
      courseName: ['', [Validators.required]],
      author: ['', [Validators.required]],
      language: ['', [Validators.required]],
      rating: [0, [Validators.required]],
      hours: [0, [Validators.required]],
      category: ['', [Validators.required]],
      subcategory: ['', [Validators.required]],
      content: ['', [Validators.required]],
      topicName: ['', [Validators.required]],
      updatedDate: new Date().toISOString(),
      creationDate: new Date().toISOString(),
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
  onSubmit(): void {
    this.loader.show();
    this.clearMessage();
    this.courseService.addCourse({
    courseName: this.courseName.value,
    category: this.category.value,
    subCategory: this.subcategory.value,
    content: this.content.value,
    author: this.author.value,
    language: this.author.value,
    topicName: this.topicName.value,
    hours: this.hours.value,
    ratings: this.rating.value
  }).subscribe({
      next: (res: any) => {
        this.loader.hide();
        if (res && !res.success) {
          this.message = {
            show: true,
            message: res.message || 'Something went wrong',
            type: 'ERROR',
          };
          return;
        }
        this.router.navigate(['/layout/admin/dashboard'], {
          queryParams: { tab: 'LOANS' },
        });
      },
      error: (err: any) => {
        this.loader.hide();
        if (err && !err.success)
          this.message = {
            show: true,
            message: err.error.message || 'Something went wrong',
            type: 'ERROR',
          };
      },
    });
  }
  onEdit(): void {
    this.courseService
      .modifyCourse({
        id:this.courseId,
        courseName: this.courseName?.value,
        hours: this.hours?.value,
        ratings: this.rating?.value
      })
      .subscribe({
        next: (res: any) => {
          console.log(res);
          if (res && !res.success) {
            this.message = {
              show: true,
              message: res.message || 'Something went wrong',
              type: 'ERROR',
            };
            return;
          }
          this.router.navigate(['/layout/admin/dashboard'], {
            // queryParams: { tab: 'LOANS' },
          });
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  onCancel(): void {
    this.router.navigate(['/layout/admin/dashboard'], {
      // queryParams: { tab: 'LOANS' },
    });
  }

  TermValidators(control: AbstractControl) {
    if (control.value > 0 && control.value <= 30) return { termRange: true };
    return false;
  }

  get courseName(): FormControl | null {
    return this.courseForm.get('courseName') as FormControl;
  }
  get author(): FormControl | null {
    return this.courseForm.get('author') as FormControl;
  }
  get language(): FormControl | null {
    return this.courseForm.get('language') as FormControl;
  }
  get rating(): FormControl | null {
    return this.courseForm.get('rating') as FormControl;
  }
  get hours(): FormControl | null {
    return this.courseForm.get('hours') as FormControl;
  }
  get category(): FormControl | null {
    return this.courseForm.get('category') as FormControl;
  }
  get subcategory(): FormControl | null {
    return this.courseForm.get('subcategory') as FormControl;
  }
  get content(): FormControl | null {
    return this.courseForm.get('content') as FormControl;
  }
  get topicName(): FormControl | null {
    return this.courseForm.get('topicName') as FormControl;
  }

  private clearMessage(): void {
    this.message = { show: false, message: '', type: 'INFO' };
  }

}
