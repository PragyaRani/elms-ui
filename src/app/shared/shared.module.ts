import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { CustomLoaderComponent } from './components/custom-loader/custom-loader.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EnrollCourseComponent } from './enroll-course/enroll-course.component';
const sharedComponents = [
  CustomLoaderComponent,
  PageNotFoundComponent,
  SidenavComponent,
];

// const sharedServices = [];

const materialComponentModules = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatTooltipModule,
  MatTableModule,
  MatSelectModule,

  MatTooltipModule,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialComponentModules,
  ],
  exports: [
    ...sharedComponents,
    FormsModule,
    ReactiveFormsModule,
    ...materialComponentModules,
  ],
  // providers: [sharedServices],
  declarations: [
    ...sharedComponents, 
    CustomLoaderComponent, EnrollCourseComponent
  ],
})
export class SharedModule {}
