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


  getBugs(sortBy, sortDirection, page, title, priority, reporter, status): Observable<BugTable[]> {
    if (title) {
      title = '&title=' + title;
    } else {
      title = '';
    }
    if (priority) {
      priority = '&priority=' + priority;
    } else {
      priority = '';
    }
    if (reporter) {
      reporter = '&reporter=' + reporter;
    } else {
      reporter = '';
    }
    if (status) {
      status = '&status=' + status;
    } else {
      status = '';
    }
    if (sortBy === '') {
      return this.http.get<BugTable[]>(this.endpoint + '?page=' + page + '&size=10' + title + priority + reporter + status);
    } else {
      return this.http.get<BugTable[]>(this.endpoint + '?sort=' + sortBy + ',' + sortDirection + '&page=' + page + '&size=10' + title +
       priority + reporter + status);
    }
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

  deleteBug(deleteid: string): Observable<void> {
    return this.http.delete<void>(this.endpoint + '/' + deleteid);
  }
}





