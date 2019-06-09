import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BugTable } from './model1.model';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class Story1sService {


  private endpoint = 'https://bug-report-system-server.herokuapp.com/bugs';
  constructor(private http: HttpClient) { }


  getBugs(page): Observable<BugTable[]> {
    return this.http.get<BugTable[]>(this.endpoint + '?page=' + page + '&size=10');
  }

  getBugsSorted(sortBy, sortDirection): Observable<BugTable[]> {
    return this.http.get<BugTable[]>(this.endpoint + '?sort=' + sortBy + ',' + sortDirection);
  }

  createBug(bug: BugTable): Observable<BugTable[]> {
    return this.http.post<BugTable[]>(this.endpoint, bug);
  }

  getBugbyId(bugid: string): Observable<BugTable> {
    return this.http.get<BugTable>(this.endpoint + '/' + bugid);
  }

  updateBug(id: string, editedbug: BugTable): Observable<BugTable[]> {
    return this.http.put<BugTable[]>(`${this.endpoint}/${id}`, editedbug);
  }

}




