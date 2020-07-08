import { ProjectServerService } from './project/service/project-server.service';
import { Injectable } from '@angular/core';
import { Project } from './project/Model/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjoperationService {
  constructor(private bugServer: ProjectServerService) {}
  getAll(): Observable<Project[]> {
    return this.bugServer.getAll();
  }
  createNew(bugName: string): Observable<Project> {
    let newBug = {
      id: 0,
      name: bugName,
    };
    return this.bugServer.save(newBug);
  }
  remove(project: Project) {
    this.bugServer.remove(project).subscribe(() => {});
  }
}
