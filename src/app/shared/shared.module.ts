import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component';
import { MessageAlertComponent } from './message-alert/message-alert.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const sharedComponents = [
  CustomLoaderComponent,
  MessageAlertComponent,
  PageNotFoundComponent
];

// const sharedServices = [];

const materialComponentModules = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,

  MatTooltipModule,
];

@NgModule({
  imports: [
    CommonModule,
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
    CustomLoaderComponent
  ],
})
export class SharedModule {}
