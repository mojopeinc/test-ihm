import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./noyau/auth/AuthGuard";
import {HomeComponent} from "./home/home.component";
import {RetourLogin} from "./noyau/auth/RetourLogin";
import {ResultatComponent} from "./reservation/resultat/resultat.component";
import {ServicesComponent} from "./reservation/services/services.component";
import {SalleComponent} from "./reservation/salle/salle.component";
import {ConfirmationComponent} from "./reservation/confirmation/confirmation.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    component: LoginComponent,
    path: 'login',
    pathMatch: 'full',
    canActivate: [RetourLogin]
  },
  {
    component: ResultatComponent,
    path: 'reservation/resultat',
    canActivate: [AuthGuard]
  },
  {
    component: ServicesComponent,
    path: 'reservation/services',
    canActivate: [AuthGuard]
  },
  {
    component: SalleComponent,
    path: 'reservation/salle',
    canActivate: [AuthGuard]
  },
  {
    component: ConfirmationComponent,
    path: 'reservation/confirmation',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
