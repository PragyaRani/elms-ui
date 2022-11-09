import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/service/course.service';
import { ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
 public Courses : ICourse[];
  constructor(private courseService: CourseService, private router: Router,) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.courseService.getCourseDetails().subscribe({
      next: (res: any) => {
       
        this.Courses = res;
        console.log(this.Courses);
      },
      error: (err: any) => {
        if (err && !err.success)
        console.log(err);
      },
    });
  }

  onModifyCourse(id:number){
    this.router.navigate([`/layout/admin/course/${id}`]);
  }
  onAssignCourse(id:number){
    this
  }
  onAddCourse(){
    this.router.navigate([`/layout/admin/course`]);
  }


}
