import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EnrollCourseComponent } from "./enroll-course/enroll-course.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserLayoutComponent } from "./user-layout/user-layout.component";

const routes: Routes = [
    {
      path: '',
      component: UserLayoutComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: UserDashboardComponent },
        {
        path: 'enrollcourse/:enrollCourseId',
        component: EnrollCourseComponent,
        },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule {}