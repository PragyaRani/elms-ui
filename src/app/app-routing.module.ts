import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostLoginLayoutComponent } from './core/component/layout/post-login-layout/post-login-layout.component';
import { PreLoginLayoutComponent } from './core/component/layout/pre-login-layout/pre-login-layout.component';
import { RegisterComponent } from './core/component/register/register.component';
import { AuthGuardService } from './core/helper/authguard.service';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const LazyAdminModule = () =>
  import('./admin/admin.module').then((response) => response.AdminModule);
const LazyUserModule = () =>
  import('./user/user.module').then((response) => response.UserModule);


const routes: Routes = [
  { path: 'login', component: PreLoginLayoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirect if going to /
  {
    path: 'layout',
    component: PostLoginLayoutComponent,
    children: [
      { path: '', redirectTo: '/user-dashboard', pathMatch: 'full' },
      {
        path: 'user',
        loadChildren: LazyUserModule,
        canActivate: [AuthGuardService],
        // allow access to role matching USER only
        data: { allowedRoles: ['Student'] },
      },
      {
        path: 'admin',
        loadChildren: LazyAdminModule,
        canActivate: [AuthGuardService],
        // allow access to role matching ADMIN only
        data: { allowedRoles: ['Admin', 'Instructor']}
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent }, // wildcard redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
