import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../Model/project';
@Injectable({
  providedIn: 'root',
})
export class ProjectServerService {
  private baseUrl = 'http://localhost:3000/projects';

  constructor(private httpClient: HttpClient) {}
  save(bugData: Project): Observable<Project> {
    if (bugData.id === 0) {
      return this.httpClient.post<Project>(this.baseUrl, bugData);
    } else {
      return this.httpClient.put<Project>(
        `${this.baseUrl}/${bugData.id}`,
        bugData
      );
    }
  }

  getAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.baseUrl);
  }
  get(id): Observable<Project> {
    return this.httpClient.get<Project>(`${this.baseUrl}/${id}`);
  }

  remove(bugData: Project): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${bugData.id}`);
  }
}
