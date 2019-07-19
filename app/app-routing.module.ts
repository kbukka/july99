import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FpasswordComponent } from './fpassword/fpassword.component';

const routes: Routes = [
  {path: 'register',component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'forgot', component:FpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
