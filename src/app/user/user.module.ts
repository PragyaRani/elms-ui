import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserLayoutComponent } from "./user-layout/user-layout.component";
import { UserRoutingModule } from "./user.routing";
import { EnrollCourseComponent } from './enroll-course/enroll-course.component';

@NgModule({
    declarations: [
      UserLayoutComponent,
      UserDashboardComponent,
      EnrollCourseComponent,
    ],
    imports: [CommonModule, UserRoutingModule, SharedModule],
  })
  export class UserModule {}
  