import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ManagersActivityComponent } from './managers-activity/managers-activity.component';
import { InvolvedTeamComponent } from './involved-team/involved-team.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProjectDetailsComponent,
    ManagersActivityComponent,
    InvolvedTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
