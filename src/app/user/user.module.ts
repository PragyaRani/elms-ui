import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserRoutingModule } from './user.routing';

@NgModule({
  declarations: [UserLayoutComponent, UserDashboardComponent],
  imports: [CommonModule, RouterModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
