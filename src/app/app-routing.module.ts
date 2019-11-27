import { EvaluateComponent } from "./pages/evaluate/evaluate.component";
import { ApComponent } from "./pages/ap/ap.component";
import { ObComponent } from "./pages/ob/ob.component";
import { ConsultComponent } from "./pages/consult/consult.component";
import { AppGuardService } from "./services/app-guard.service";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataStComponent } from "./pages/data-st/data-st.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PlanStComponent } from "./pages/plan-st/plan-st.component";
import { DataMaComponent } from "./pages/data-ma/data-ma.component";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    canActivate: [AppGuardService],
    children: [
      { path: "home", component: HomeComponent },
      { path: "data-ma", component: DataMaComponent },
      { path: "data-st", component: DataStComponent },
      { path: "plan-st", component: PlanStComponent },
      { path: "consult", component: ConsultComponent },
      { path: "ob", component: ObComponent },
      { path: "ap", component: ApComponent },
      { path: "evaluate", component: EvaluateComponent },
      { path: "", redirectTo: "/login", pathMatch: "full" }
    ]
  },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
