import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeDe from "@angular/common/locales/de";
import localeDeExtra from "@angular/common/locales/extra/de";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableExporterModule } from "mat-table-exporter"; // npm install --save mat-table-exporter
import { NgChartsModule } from "ng2-charts"; // npm install --save ng2-charts   // npm install --save chart.js
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardComponent } from "./components/card/card.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TeamCardComponent } from "./components/teamCard/TeamCard.component";
import { ImportService } from "./services/import.service";
registerLocaleData(localeDe, "de-DE", localeDeExtra);
// solve problem => Missing locale data for the locale "de-DE".
// https://codehunter.cc/a/typescript/missing-locale-data-for-the-locale-de-de

@NgModule({
  declarations: [AppComponent, TeamCardComponent, CardComponent, DashboardComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatTableExporterModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    NgChartsModule,
    MatDatepickerModule,
    MatDividerModule
  ],
  providers: [
    ImportService,
    {
      provide: LOCALE_ID,
      useValue: "de-DE", // 'de-DE' for Germany
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
