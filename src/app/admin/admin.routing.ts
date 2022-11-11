import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddTemplateComponent } from "./add-template/add-template.component";
import { AssignCourseComponent } from "./assign-course/assign-course.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { ViewEnrolledStudentsComponent } from "./view-enrolled-students/view-enrolled-students.component";

const routes: Routes = [
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch:'full' },
        { path: 'dashboard', component: AdminDashboardComponent },
        {
          path: 'course/:courseId',
          component: EditCourseComponent,
        },
        {
          path: 'course',
          component: EditCourseComponent,
        },
        {
          path: 'assign/:courseId',
          component: AssignCourseComponent,
        },
        {
          path: 'addtemplate',
          component: AddTemplateComponent,
        },
        {
          path: 'viewenrollstudents',
          component: ViewEnrolledStudentsComponent,
        }
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    // providers: [FormGuard],
  })
  export class AdminRoutingModule {}