import { AppService } from "./services/app.service";
import { AppGuardService } from "./services/app-guard.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { LayoutModule } from "@angular/cdk/layout";

import { HomeComponent } from "./pages/home/home.component";
import { DataStComponent } from "./pages/data-st/data-st.component";
import { LoginComponent } from "./components/login/login.component";
import { PlanStComponent } from "./pages/plan-st/plan-st.component";
import { ConsultComponent } from "./pages/consult/consult.component";
import { ObComponent } from "./pages/ob/ob.component";
import { ApComponent } from "./pages/ap/ap.component";
import { EvaluateComponent } from "./pages/evaluate/evaluate.component";
import { DialogComponent } from "./dialog/dialog.component";
import { DiApComponent } from "./dialogs/di-ap/di-ap.component";
import { DiCoComponent } from "./dialogs/di-co/di-co.component";
import { DiDaComponent } from "src/app/dialogs/di-da/di-da.component";
import { DiEvComponent } from "./dialogs/di-ev/di-ev.component";
import { DiObComponent } from "./dialogs/di-ob/di-ob.component";
import { DiPlComponent } from "./dialogs/di-pl/di-pl.component";
import { DataMaComponent } from "./pages/data-ma/data-ma.component";
import { MaterialModule } from "./material-module";
import { HttpClientModule } from "@angular/common/http";
import { StudentService } from "./services/student.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DataStComponent,
    LoginComponent,
    PlanStComponent,
    ConsultComponent,
    ObComponent,
    ApComponent,
    EvaluateComponent,
    DialogComponent,
    DiApComponent,
    DiCoComponent,
    DiDaComponent,
    DiEvComponent,
    DiObComponent,
    DiPlComponent,
    DataMaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    DiDaComponent,
    DiApComponent,
    DiCoComponent,
    DiEvComponent,
    DiObComponent
  ],

  providers: [AppGuardService, StudentService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
