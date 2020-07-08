import { Project } from './Model/project';
import { ProjoperationService } from './../projoperation.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  projectname: string = '';

  @Output()
  newBugCreated: EventEmitter<Project> = new EventEmitter<Project>();
  constructor(private projop: ProjoperationService, private router: Router) {}
  ngOnInit(): void {}

  onAddNewClick() {
    this.projop.createNew(this.projectname).subscribe((newBugCreated) => {
      this.router.navigate(['projects']);
    });
  }
}
