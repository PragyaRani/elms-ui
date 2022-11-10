import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
const materialComponentModules = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatBadgeModule,
  MatSidenavModule,
  MatMenuModule

];

import { CustomLoaderComponent, MessageAlertComponent, PageNotFoundComponent, SidenavComponent } from './components';
const sharedComponents = [
  CustomLoaderComponent,
  MessageAlertComponent,
  PageNotFoundComponent,
  SidenavComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
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
    ...sharedComponents
  ],
})
export class SharedModule { }
