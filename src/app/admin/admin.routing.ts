import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";

const routes: Routes = [
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
        { path: '', redirectTo: 'dashboard' },
        { path: 'dashboard', component: AdminDashboardComponent },
        {
          path: 'course/:courseId',
          component: EditCourseComponent,
        },
        {
          path: 'course',
          component: EditCourseComponent,
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