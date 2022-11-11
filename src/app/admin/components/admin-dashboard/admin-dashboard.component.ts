import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/service/course.service';
import { LoaderService } from 'src/app/core/service/loader.service';
import { ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
 public Courses : ICourse[];
  constructor(private courseService: CourseService, private router: Router, private loader :LoaderService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.loader.show();
    this.courseService.getCourseDetails().subscribe({
      next: (res: any) => {
        this.loader.hide();
        this.Courses = res;
        
      },
      error: (err: any) => {
        this.loader.hide();
        if (err && !err.success)
        console.log(err);
       
      },
    });
   
  }

  onModifyCourse(id:number){
    this.router.navigate([`/layout/admin/course/${id}`]);
  }
  onAssignCourse(id:number){
    this.router.navigate([`/layout/admin/assign/${id}`]);
  }
  onAddCourse(){
    this.router.navigate([`/layout/admin/course`]);
  }



}
