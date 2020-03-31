import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentPersonalFormComponent} from './student-personal-form/student-personal-form.component'
import {StudentUniversityDataComponent} from './student-university-data/student-university-data.component';
import {StudentFamiliarInfoComponent} from './student-familiar-info/student-familiar-info.component';
import {appRoutes} from './utilities/constants'

const routes: Routes = [
  {
    path:appRoutes.home, 
    component:StudentPersonalFormComponent
  },
  {
    path:appRoutes.familyInfo,
    component:StudentUniversityDataComponent
  },
  {
    path:appRoutes.academicInfo,
    component:StudentFamiliarInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
