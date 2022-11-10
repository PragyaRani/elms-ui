import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseOverviewComponent } from "./course-overview/course-overview.component";
import { EnrollCourseComponent } from "./enroll-course/enroll-course.component";
import { ImcompleteCourseComponent } from "./imcomplete-course/imcomplete-course.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserLayoutComponent } from "./user-layout/user-layout.component";

const routes: Routes = [
    {
      path: '',
      component: UserLayoutComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: UserDashboardComponent },
        { path: 'overview', component: CourseOverviewComponent },
        {
        path: 'enrollcourse/:enrollCourseId',
        component: EnrollCourseComponent,
        },
        {
          path: 'completecourse',
          component: ImcompleteCourseComponent,
          },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule {}