import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/service/course.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent implements OnInit {
  Courses: any;
  displayedColumns: string[] = ['coursename', 'duedate', 'author','language', 'actions'];
  dataSource;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.courseService.getCourseDetails().subscribe({
      next: (res: any) => {
        this.Courses = res;
      },
      error: (err: any) => {
        if (err && !err.success)
        console.log(err);
      },
    });
  }
  public onOpenCourse(courseId:number){
    this.router.navigate([`/layout/user/enrollcourse/${courseId}`]);
}
}
