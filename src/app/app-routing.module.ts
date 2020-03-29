import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentPersonalFormComponent} from './student-personal-form/student-personal-form.component'

const routes: Routes = [
  {
    path:'', 
    component:StudentPersonalFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
