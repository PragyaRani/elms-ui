import { Component, OnInit } from '@angular/core';
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
  constructor(private courseService:CourseService, public authService:AuthService) { }

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
  public onOpenCourse(){

  }

}
