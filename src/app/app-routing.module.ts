import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentPersonalFormComponent} from './student-personal-form/student-personal-form.component'
import {StudentAcademicInfoComponent} from './student-academic-info/student-academic-info.component';
import {StudentFamiliarInfoComponent} from './student-familiar-info/student-familiar-info.component';

const routes: Routes = [
  {
    path:'', 
    component:StudentPersonalFormComponent
  },
  {
    path:"familyInfo",
    component:StudentAcademicInfoComponent
  },
  {
    path:"academicInfo",
    component:StudentFamiliarInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
