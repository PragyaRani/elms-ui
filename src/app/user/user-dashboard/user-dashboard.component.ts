import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { CourseService } from 'src/app/core/service/course.service';
import { LoaderService } from 'src/app/core/service/loader.service';
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
    private router: Router, private loader:LoaderService) { }

  ngOnInit(): void {
    this.loader.show();
    let student = this.authService.userValue;
    this.courseService.getStudentEnrollCourse(student.id).subscribe({
      next: (res: any) => {
        this.loader.hide();
        this.dataSource = res;
      },
      error: (err: any) => {
        this.loader.hide();
        if (err && !err.success)
        console.log(err);
      },
    });
  }
  
  public onOpenCourse(courseId:number){
      this.router.navigate([`/layout/user/enrollcourse/${courseId}`]);
  }

}
