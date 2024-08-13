import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { PropertyFormComponent } from './property-form/property-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewallComponent } from './viewall/viewall.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'own',component:OwnerComponent,
    children:[
  {path:"fill",component:PropertyFormComponent},
  {path:'viewforms',component:ViewallComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
