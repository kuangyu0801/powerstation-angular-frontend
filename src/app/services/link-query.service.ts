import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkQuery } from '../common/link-query';
import { LinkQueryResponse } from '../common/link-query-response';

@Injectable({
  providedIn: 'root'
})
export class LinkQueryService {

  private queryUrl = 'http://localhost:4200/api/link-query/query';

  constructor(private httpClient: HttpClient) { }

  query(linkQuery: LinkQuery): Observable<LinkQueryResponse>{ 
    return this.httpClient.post<LinkQueryResponse>(this.queryUrl, linkQuery);
  }
}
