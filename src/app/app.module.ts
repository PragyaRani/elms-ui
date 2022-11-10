import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/component/login/login.component';
import { PostLoginLayoutComponent } from './core/component/layout/post-login-layout/post-login-layout.component';
import { PreLoginLayoutComponent } from './core/component/layout/pre-login-layout/pre-login-layout.component';
import { PreLoginHeaderComponent } from './core/component/layout/pre-login-layout/partials/pre-login-header/pre-login-header.component';
import { PreLoginFooterComponent } from './core/component/layout/pre-login-layout/partials/pre-login-footer/pre-login-footer.component';
import { SharedModule } from './shared/shared.module';
import { TokenInterceptorService } from './core/helper/token-interceptor.service';
import { PostLoginHeaderComponent } from './core/component/layout/post-login-layout/partials/post-login-header/app-post-login-header.component';
import { PostLoginFooterComponent } from './core/component/layout/post-login-layout/partials/post-login-footer/post-login-footer.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from './core/service/loader.service';
import { RouterModule } from '@angular/router';

const coreComponents = [
  // pre-login
  PreLoginLayoutComponent,
  PreLoginHeaderComponent,
  PreLoginFooterComponent,
  // post-login
  PostLoginLayoutComponent,
  PostLoginHeaderComponent,
  PostLoginFooterComponent,

  LoginComponent
];
const coreServices = [LoaderService];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ...coreComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule, 
    RouterModule
  ],
  providers: [...coreServices,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
