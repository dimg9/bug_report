import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BugTable } from './model1.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class Story1sService {


  private endpoint = 'https://bug-report-system-server.herokuapp.com/bugs';
  private endpoint2 = 'https://bug-report-system-server.herokuapp.com/bugs?sort=';
  constructor(private http: HttpClient) { }


  getSortHeader(headers): Observable<BugTable[]> {

    return this.http.get<BugTable[]>(this.endpoint2 + headers + ',asc');
  };


  getBugs(): Observable<BugTable[]> {
    return this.http.get<BugTable[]>(this.endpoint);

  }



}
