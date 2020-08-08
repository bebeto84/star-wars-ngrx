import { SwapiArrayResponse } from './../shared.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// TODO: transform to TS alias
import { API } from '../config';
import { Observable } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';
import { Movie } from './movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  // TODO: Use interceptor to cache request
  getAll(): Observable<Movie[]> {
    return this.httpClient.get<SwapiArrayResponse<Movie[]>>(API.endpoint.films).pipe(
        map(({ results }) => results)
      );
  }

  getDetail(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${API.endpoint.films}/${id}`);
  }
}
