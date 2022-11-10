import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AdminRoutingModule } from "./admin.routing";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { MatTabsModule } from '@angular/material/tabs';
import { AssignCourseComponent } from './assign-course/assign-course.component';
const materialComponentModules = [MatTabsModule];

@NgModule({
  declarations: [AdminLayoutComponent, AdminDashboardComponent, EditCourseComponent, AssignCourseComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ...materialComponentModules,
  ],
  // exports: [...materialComponentModules]
})
export class AdminModule {}