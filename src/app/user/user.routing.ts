import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserLayoutComponent } from "./user-layout/user-layout.component";

const routes: Routes = [
    {
      path: '',
      component: UserLayoutComponent,
      children: [
        { path: '', redirectTo: 'dashboard' },
        { path: 'dashboard', component: UserDashboardComponent }
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule {}