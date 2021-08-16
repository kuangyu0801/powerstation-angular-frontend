import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Station } from '../common/station';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StationService {
  private baseUrl = 'http://localhost:8080/api/stations';
    // inject http client
    constructor(private httpClient : HttpClient) { }
  // TODO: 這個環節很重要, 查清楚每個component的意義與用法
  getStationList() : Observable<Station[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      // using map to map response to product
      map(response => response._embedded.stations)
    )
  }
}

interface GetResponse {
  _embedded: {
    stations: Station[]
  }
}