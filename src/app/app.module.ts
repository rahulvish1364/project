import { ProjoperationService } from './projoperation.service';
import { ProjectServerService } from './project/service/project-server.service';
import { ProjectTrackerComponent } from './project/project-tracker/project-tracker.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';

let routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectTrackerComponent },
];

@NgModule({
  declarations: [AppComponent, ProjectComponent, ProjectTrackerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [ProjectServerService, ProjoperationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
