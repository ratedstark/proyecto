import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

const routes: Routes = [
    {path:'Eliminar', component:EliminarComponent},
    {path:'Principal',component:PrincipalComponent},
    {path:'Registro', component:RegisterComponent},
    {path:'Login',component:LoginComponent},
    {path:'**', redirectTo:'Login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
