import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChartComponent} from './chart/chart.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {DeviceStateDaoService} from "./services/device-state.dao.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { WindDisplayComponent } from './wind-display/wind-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    WindDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DeviceStateDaoService, WindDisplayComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
