import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserLayoutComponent } from "./user-layout/user-layout.component";
import { UserRoutingModule } from "./user.routing";
import { EnrollCourseComponent } from './enroll-course/enroll-course.component';
import { RouterModule } from "@angular/router";
import { CourseOverviewComponent } from './course-overview/course-overview.component';

@NgModule({
    declarations: [
      UserLayoutComponent,
      UserDashboardComponent,
      EnrollCourseComponent,
      CourseOverviewComponent,
    ],
    imports: [CommonModule, UserRoutingModule, SharedModule,RouterModule],
  })
  export class UserModule {}
  