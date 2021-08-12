import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkQuery } from '../common/link-query';

@Injectable({
  providedIn: 'root'
})
export class LinkQueryService {

  private queryUrl = 'http://localhost:8080/api/link-query/query';
  constructor(private httpClient: HttpClient) { }

  query(linkQuery: LinkQuery): Observable<any> { 
    return this.httpClient.post<LinkQuery>(this.queryUrl, linkQuery);
  }
}
