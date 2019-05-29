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


  getBugs(): Observable<BugTable[]> {
    return this.http.get<BugTable[]>(this.endpoint);
  }

  getBugsSorted(sortBy, sortDirection): Observable<BugTable[]> {
    return this.http.get<BugTable[]>(this.endpoint + '?sort=' + sortBy + ',' + sortDirection);
  }




}




