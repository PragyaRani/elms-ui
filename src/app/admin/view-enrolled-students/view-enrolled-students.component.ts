import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/service/course.service';
import { LoaderService } from 'src/app/core/service/loader.service';

@Component({
  selector: 'app-view-enrolled-students',
  templateUrl: './view-enrolled-students.component.html',
  styleUrls: ['./view-enrolled-students.component.scss']
})
export class ViewEnrolledStudentsComponent implements OnInit {
dataSource:any;
 displayedColumns: string[] = ['Student', 'Email', 'Course', 'Author'];
  constructor(private courseService:CourseService, private loader:LoaderService) { }

  ngOnInit(): void {
    this.loader.show();
    this.courseService.GetEnrollStudentWithCourse().subscribe({
      next: (res: any) => {
        this.loader.hide();
        this.dataSource = res.data;
        console.log(this.dataSource);
      },
      error: (err: any) => {
        this.loader.hide();
        if (err && !err.success)
        console.log(err);
      },
  })
}

}
