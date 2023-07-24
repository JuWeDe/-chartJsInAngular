import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { SchemaChartComponent } from './components/schema-chart/schema-chart.component';
import { PeregLossChartComponent } from './components/pereg-loss-chart/pereg-loss-chart.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    SchemaChartComponent,
    PeregLossChartComponent,
    TableComponent
  ],
  imports: [
    HttpClientModule,
    NgChartsModule,
    // CsvModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
