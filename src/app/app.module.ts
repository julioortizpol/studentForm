import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';



import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormIndicatorComponent } from './form-indicator/form-indicator.component';
import { StudentPersonalFormComponent } from './student-personal-form/student-personal-form.component';
import { StudentFamiliarInfoComponent } from './student-familiar-info/student-familiar-info.component';
import { StudentAcademicInfoComponent } from './student-academic-info/student-academic-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FormIndicatorComponent,
    StudentPersonalFormComponent,
    StudentFamiliarInfoComponent,
    StudentAcademicInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
