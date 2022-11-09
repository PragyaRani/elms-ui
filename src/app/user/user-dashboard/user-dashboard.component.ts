import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { CourseService } from 'src/app/core/service/course.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})

export class UserDashboardComponent implements OnInit {
  displayedColumns: string[] = ['coursename', 'duedate', 'progress', 'actions'];
  dataSource;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  constructor(private courseService:CourseService, public authService:AuthService,
    private router: Router) { }

  ngOnInit(): void {
    let student = this.authService.userValue;
    this.courseService.getStudentEnrollCourse(student.id).subscribe({
      next: (res: any) => {
        this.dataSource = res;
        console.log(res);
      },
      error: (err: any) => {
        if (err && !err.success)
        console.log(err);
      },
    });
  }
  // dataSource = USER_DATA;
  public onOpenCourse(courseId:number){
      this.router.navigate([`/layout/user/enrollcourse/${courseId}`]);
  }

}
