import { Project } from './../Model/project';
import { ProjoperationService } from './../../projoperation.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-project-tracker',
  templateUrl: './project-tracker.component.html',
  styleUrls: ['./project-tracker.component.css'],
})
export class ProjectTrackerComponent implements OnInit {
  Projects: Project[] = [];

  sortAttr: string = 'name';
  sortDesc: boolean = false;

  message: string = '';

  constructor(private projop: ProjoperationService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    console.log('loading bugs');
    this.projop.getAll().subscribe((proj) => (this.Projects = proj));
  }

  onNewProjectCreated(newProj) {
    this.Projects = [...this.Projects, newProj];
  }

  delete(proj) {
    this.projop.remove(proj);
  }
}
